import {MainActionType} from "./store";
import {userApi} from "../api/api";
import {Dispatch} from "redux";

export type PhotosType = {
    small: null | string
    large: null | string
}
export type UsersPropsType = {
    id: string
    followed: boolean
    photos: PhotosType
    name: string
    status: string
    location: { country: string, city: string }
}
export type FollowActionType = {
    type: "FOLLOW"
    userId: string
}
export type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: string
}
export type SetUsersActionType = {
    type: "SET-USERS"
    users: Array<UsersPropsType>
}
export type SetCurrentPagesActionType = {
    type: "SET-CURRENT-PAGES"
    currentPage: number
}
export type SetTotalUsersCountActionType = {
    type: "SET-TOTAL-USER-COUNT"
    totalUserCount: number
}
export type ToggleIsFetchingActionType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}
export type ToggleInProgressActionType = {
    type: "TOGGLE-IN-PROGRESS"
    followingInProgress: boolean
    userId: string
}


let initialState = {
    users: [] as Array<UsersPropsType>,
    pageSize: 6,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: ['1']
};
export  type initialStateType = typeof initialState

const usersReducer = (state: initialStateType = initialState, action: MainActionType): initialStateType => {
    switch (action.type) {
        case  'FOLLOW': {
            return {
                ...state, users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        }
        case  'UNFOLLOW': {
            return {
                ...state, users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        }
        case  'SET-USERS': {
            return {...state, users: action.users}
        }
        case  'SET-CURRENT-PAGES': {
            return {...state, currentPage: action.currentPage}
        }
        case  'SET-TOTAL-USER-COUNT': {
            return {...state, totalUserCount: action.totalUserCount}
        }
        case  'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case  'TOGGLE-IN-PROGRESS': {
            return {
                ...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default :
            return state;
    }
};

export let FollowAC = (userId: string): FollowActionType => {
    return {type: 'FOLLOW', userId}
}
export let UnfollowAC = (userId: string): UnfollowActionType => {
    return {type: 'UNFOLLOW', userId}
}
export let SetUsersAC = (users: Array<UsersPropsType>): SetUsersActionType => {
    return {type: 'SET-USERS', users}
}
export let SetCurrentPagesAC = (currentPage: number): SetCurrentPagesActionType => {
    return {type: 'SET-CURRENT-PAGES', currentPage}
}
export let SetTotalUsersCountAC = (totalUserCount: number): SetTotalUsersCountActionType => {
    return {type: 'SET-TOTAL-USER-COUNT', totalUserCount}
}
export let ToggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching}
}
export let ToggleInProgressAC = (followingInProgress: boolean, userId: string): ToggleInProgressActionType => {
    return {type: 'TOGGLE-IN-PROGRESS', followingInProgress, userId}
}

export const getUserTC = (currentPage:number, pageSize:number) => {
    return (dispatch: Dispatch)=> {
        dispatch(ToggleIsFetchingAC(true))
        userApi.getUsers(currentPage,pageSize).then(data => {
            dispatch(ToggleIsFetchingAC(false))
            dispatch(SetUsersAC(data.items))
            dispatch(SetTotalUsersCountAC(data.totalCount))
        })
    }
}
export const pageChangeTC = (pageNumber:number, pageSize:number) => {
    return (dispatch: Dispatch)=> {
        dispatch(SetCurrentPagesAC(pageNumber))
        dispatch(ToggleIsFetchingAC(true))
        userApi.getUsers(pageNumber,pageSize).then(data => {
            dispatch(ToggleIsFetchingAC(false))
            dispatch(SetUsersAC(data.items))
        })
    }
}
export const unfollowTC = (userId: string) => {
    return (dispatch: Dispatch)=> {
        dispatch(ToggleInProgressAC(true,userId))
        userApi.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(UnfollowAC(userId))
            }
            dispatch(ToggleInProgressAC(false,userId))
        })
    }
}
export const followTC = (userId: string) => {
    return (dispatch: Dispatch)=> {
        dispatch(ToggleInProgressAC(true,userId))
        userApi.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(FollowAC(userId))
            }
            dispatch(ToggleInProgressAC(false,userId))
        })
    }
}


export default usersReducer;