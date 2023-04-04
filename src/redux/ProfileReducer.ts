import {MainActionType} from "./store";
import {ChangeEvent} from "react";
import {FollowAC, PhotosType, ToggleInProgressAC} from "./UsersReducer";
import {Dispatch} from "redux";
import {profileApi, userApi} from "../api/api";

export type PostDataPropsType = {
    id: number
    text: string
    likes: number
}
export type ProfileDataType = {
    aboutMe: string
    contacts: object
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export  type ProfilePageType = {
    postData: Array<PostDataPropsType>
    newPostText: string
    profile: ProfileDataType | null
    status:string
}

export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdatePostTextActionType = {
    type: "UPDATE-POST-TEXT"
    newText: string
}
export type SetUsersProfileActionType = {
    type: "SET-USERS-PROFILE"
    profile: ProfileDataType
}
export type SetStatusActionType = {
    type: "SET-STATUS"
    status: string
}

export let AddPostAC = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}
export let UpdatePostTextAC = (newText: string): UpdatePostTextActionType => {
    return {type: 'UPDATE-POST-TEXT', newText}
}
export let SetUsersProfileAC = (profile: ProfileDataType):SetUsersProfileActionType => {
    return {type: 'SET-USERS-PROFILE', profile}
}
export let SetStatusAC = (status: string):SetStatusActionType => {
    return {type: 'SET-STATUS', status}
}

export const getUsersProfileTC = (userId:string) => {
    return (dispatch: Dispatch)=> {
        userApi.getProfile(userId).then(data => {
            dispatch(SetUsersProfileAC(data))
        })
    }
}
export const getStatusTC = (userId:string) => {
    return (dispatch: Dispatch)=> {
        profileApi.getStatus(userId).then(data => {
            dispatch(SetStatusAC(data))
        })
    }
}
export const updateStatusTC = (status:string) => {
    return (dispatch: Dispatch)=> {
        profileApi.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(SetStatusAC(status))
            }
        })
    }
}


let initialState: ProfilePageType = {
    postData: [
        {id: 1, text: 'What\'s up?', likes: 10},
        {id: 2, text: 'What are you doing', likes: 15},
    ],
    newPostText: 'it-incubator.com',
    profile: null,
    status:'',
};

const

    profileReducer = (state: ProfilePageType = initialState, action: MainActionType):ProfilePageType => {
    switch (action.type) {
        case  'ADD-POST': {
            let newPost: PostDataPropsType = {id: 3, text: state.newPostText, likes: 0}
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case  'UPDATE-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case  'SET-USERS-PROFILE': {
            return {...state, profile: action.profile}
        }
        case  'SET-STATUS': {
            return {...state, status: action.status}
        }
        default :
            return state;
    }

};

export default profileReducer;