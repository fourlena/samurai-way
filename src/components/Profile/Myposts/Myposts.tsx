import React, {ChangeEvent} from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";
import {PostDataPropsType} from "../../../redux/ProfileReducer";

type MypostsPropsType={
    postData: Array<PostDataPropsType>
    newPostText:string
    addPost:()=>void
    updatePostText:(newText:string)=>void
    // dispatch:(action:MainActionType)=>void
}



function Myposts (props:MypostsPropsType)  {
    const addPost = ()=> props.addPost() ;
    // const addPost = ()=> props.dispatch(AddPostAC()) ;

    let postElement =  props.postData.map( p => <Post text={p.text} likes={p.likes}/>)

    function onPostChange(e:ChangeEvent<HTMLTextAreaElement>){
        props.updatePostText(e.currentTarget.value)
        // props.dispatch(UpdatePostTextAC(e))
    }

    return (
        <div className={s.myPost}>
            <h4>My posts</h4>
            <textarea onChange={onPostChange} value={props.newPostText} > </textarea>
            <button onClick={addPost}> Click </button>
            {postElement}
        </div>
    );

};

export default Myposts;