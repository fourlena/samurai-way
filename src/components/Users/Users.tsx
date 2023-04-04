import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import {mapStateToPropsType, userPagePropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {userApi} from "../../api/api";
import {unfollowTC, UsersPropsType} from "../../redux/UsersReducer";

type UserPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersPropsType>
    followingInProgress: Array<string>
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    toggleInProgress: (followingInProgress: boolean, userId: string) => void
    onPageChange: (pageNumber: number) => void
}

const Users = (props: UserPropsType) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span
                        className={props.currentPage === el ? style.selectedPage : style.page}
                        onClick={(e) => {
                            props.onPageChange(el)
                        }}>{el}</span>
                })}
            </div>
            {props.users.map(el => <div className={style.user}>
                <div className={style.wrapper}>
                    <div>
                        <NavLink to={'/profile' + '/' + el.id}>
                            <img className={style.img} src={el.photos.small != null ? el.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                                      onClick={() => props.unfollow(el.id)
                            }>Followed</button>
                            : <button disabled={props.followingInProgress.some(id => id === el.id)}
                                      onClick={() => props.follow(el.id)
                            }>Unfollowed</button>
                        }

                    </div>
                </div>
                <div className={style.text}>
                    <div>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </div>
                    <div>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </div>
                </div>
            </div>)}

        </div>
    );
};

export default Users;