import React from 'react';
import s from './Post.module.css'

type PostPropsType ={
    text:string
    likes: number
}

function Post  (props:PostPropsType)  {
    return (
        <div className={s.item}>
            <img src="https://w7.pngwing.com/pngs/791/512/png-transparent-user-profile-computer-icons-internet-bot-others-miscellaneous-monochrome-silhouette.png" />
            {props.text}
            <div> likes {props.likes}</div>
        </div>
    );

};

export default Post;