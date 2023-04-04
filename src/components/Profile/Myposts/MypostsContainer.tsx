import React, {ChangeEvent} from 'react';
import s from './Myposts.module.css'
import {AddPostAC, UpdatePostTextAC} from "../../../redux/ProfileReducer";
import Myposts from "./Myposts";
import {AppRootStateType} from "../../../redux/redux-store";
import {EmptyObject, Store} from "redux";
import {connect} from "react-redux";

type MypostsPropsType = {
    store: Store<EmptyObject & AppRootStateType, any>
}

// function MypostsContainer() {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().profilePage;
//
//                 const addPost = () => store.dispatch(AddPostAC());
//
//                 function onPostChange(newText: string) {
//                     store.dispatch(UpdatePostTextAC(newText))
//                 }
//
//                 return <Myposts
//                     addPost={addPost}
//                     updatePostText={onPostChange}
//                     postData={state.postData}
//                     newPostText={state.newPostText}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state:AppRootStateType)=>{
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch:any)=>{
    return {
        addPost: ()=>{
            dispatch(AddPostAC())
        },
        updatePostText: (newText: string)=>{
           dispatch(UpdatePostTextAC(newText))
        }
    }
}

const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts)

export default MypostsContainer;