import React from 'react';
import s from './../Dialogs.module.css'


type MessageItemProps ={
    message: string
}

function MessageItem(props:MessageItemProps){
    return <div className='message'>{props.message}</div>
}

export default MessageItem;