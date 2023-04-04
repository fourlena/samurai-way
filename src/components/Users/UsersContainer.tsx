import React from 'react';
import {Dispatch, EmptyObject, Store} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

import {
    followTC, getUserTC,
    pageChangeTC,
    SetCurrentPagesAC,
    ToggleInProgressAC,
    unfollowTC,
    UsersPropsType
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userApi} from "../../api/api";

// type UsersPropsType = {
//     store: Store<EmptyObject & AppRootStateType, any>
// }

// type mapStateToPropsType={
//     userPage:initialStateType
// }
export type mapStateToPropsType = {
    users: Array<UsersPropsType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
// setTotalUsersCount: (totalUsersCount: number) => void
// toggleIsFetching: (isFetching: boolean) => void
// setUsers: (users: Array<UsersPropsType>) => void

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPages: (currentPage: number) => void
    toggleInProgress: (followingInProgress: boolean, userId: string) => void
    getUser: (currentPage: number, pageSize: number) => void
    pageChange: (pageNumber: number, pageSize: number) => void
}

export type userPagePropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersContainer extends React.Component<userPagePropsType, any> {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }
    onPageChange = (pageNumber: number) => {
        this.props.pageChange(pageNumber, this.props.pageSize)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    toggleInProgress={this.props.toggleInProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>

        );
    }
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow: followTC,
    unfollow: unfollowTC,
    setCurrentPages: SetCurrentPagesAC,
    toggleInProgress: ToggleInProgressAC,
    getUser: getUserTC,
    pageChange: pageChangeTC,

})(UsersContainer);

// let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType=>{
//     return {
//         follow: (userId: string)=>{
//             dispatch(FollowAC(userId))
//         },
//         unfollow: (userId: string)=>{
//             dispatch(UnfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersPropsType>)=>{
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPages: (currentPage: number)=>{
//             dispatch(SetCurrentPagesAC(currentPage))
//         },
//         setTotalUsersCount: (totalUserCount: number)=>{
//             dispatch(SetTotalUsersCountAC(totalUserCount))
//         },
//         toggleIsFetching: (isFetching: boolean)=>{
//             dispatch(ToggleIsFetchingAC(isFetching))
//         },
//     }
// }