import React from 'react';
import style from './Users.module.css'
import {userPagePropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'

// export const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers:     {
//         "API-KEY": "da6a5b05-3cd4-4d2e-961e-5e12d6571fb2"
//     }
// });


const UsersFunction = (props: userPagePropsType) => {
    let getUsers = ()=>{
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => props.getUser(response.data.items))
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(el => <div className={style.user}>
                <div className={style.wrapper}>
                    <div>
                        <img className={style.img} src={el.photos.small != null ? el.photos.small : userPhoto }/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => props.unfollow(el.id)}>Followed</button>
                            : <button onClick={() => props.follow(el.id)}>Unfollowed</button>
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

export default UsersFunction;