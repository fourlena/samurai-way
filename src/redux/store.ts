import {ChangeEvent} from "react";
import profileReducer, {
    AddPostActionType,
    SetStatusActionType,
    SetUsersProfileActionType,
    UpdatePostTextActionType
} from "./ProfileReducer";
import dialogReducer, {AddMessageActionType, UpdateMessageTextActionType} from "./DialogReducer";
import {
    FollowActionType,
    SetCurrentPagesActionType,
    SetTotalUsersCountActionType,
    SetUsersActionType, ToggleInProgressActionType, ToggleIsFetchingAC, ToggleIsFetchingActionType,
    UnfollowActionType
} from "./UsersReducer";
import {SetAuthUserDataActionType} from "./AuthReducer";


// let store: RootStoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, text: 'What\'s up?', likes: 10},
//                 {id: 2, text: 'What are you doing', likes: 15},
//             ],
//             newPostText: 'it-incubator.com'
//         },
//         messagePage: {
//             dialogData: [
//                 {id: 1, name: 'Lena'},
//                 {id: 2, name: 'Slava'},
//                 {id: 3, name: 'Liza'}
//             ],
//             messageData: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'whats up?'},
//                 {id: 3, message: 'Goodbye'}
//             ],
//             newMessageText: 'HELLO'
//         },
//         sidebar: {
//             sidebarData: [
//                 {id: 1, name: 'Lena'},
//                 {id: 2, name: 'Slava'},
//                 {id: 3, name: 'Liza'}
//             ]
//         }
//     },
//     _callSubscriber(state) {
//         console.log('Change state')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observe) {
//         this._callSubscriber = observe
//     },
//
//     dispatch(action){
//         profileReducer(this._state.profilePage,action);
//         dialogReducer(this._state.messagePage, action);
//         this._callSubscriber(this._state)
//     }
// }


export type MainActionType = AddPostActionType | UpdatePostTextActionType |  AddMessageActionType | UpdateMessageTextActionType | FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPagesActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType | SetUsersProfileActionType | SetAuthUserDataActionType | ToggleInProgressActionType | SetStatusActionType

export type DialogDataPropsType = {
    id: number
    name: string
}

export type MessageDataPropsType = {
    id: number
    message: string
}

export type SidebarDataPropsType = {
    id: number
    name: string
}

 type PostDataPropsType = {
    id: number
    text: string
    likes: number
}

 type ProfilePageType = {
    postData: Array<PostDataPropsType>
    newPostText: string
}

export type MessagePageType = {
    dialogData: Array<DialogDataPropsType>
    messageData: Array<MessageDataPropsType>
    newMessageText: string
}

export type SidebarPageType = {
    sidebarData: Array<SidebarDataPropsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarPageType
}

export type RootStoreType = {
    _state: RootStateType
    getState: () => RootStateType
    addPost:() => void
    _callSubscriber:(state: RootStateType)=> void
    updatePostText:(newText: string)=> void
    addMessage:() => void
    updateMessageText:(newMessage: string)=> void
    subscribe:(observe: (state: RootStateType) => void)=> void
    dispatch:(action:MainActionType) => void
}


// export default store