import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps ={
    name: string
    id: number
}

function DialogItem(props:DialogItemProps){
    return(
        <div className={s.wrapper}>
            <img className={s.img} src="https://w7.pngwing.com/pngs/791/512/png-transparent-user-profile-computer-icons-internet-bot-others-miscellaneous-monochrome-silhouette.png" />
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;