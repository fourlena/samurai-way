import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {
    DialogDataPropsType,
    MainActionType,
    MessageDataPropsType,
} from "../../redux/store";
import {Navigate } from "react-router-dom";

type DialogPropsType={
    messageData:Array<MessageDataPropsType>
    dialogData:Array<DialogDataPropsType>
    addMessage:()=>void
    updateMessageText:(newMessage:string)=>void
    newMessageText:string
    isAuth:boolean
}


function Dialogs(props:DialogPropsType) {
    let dialogElement = props.dialogData.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.messageData.map( m => <MessageItem message={m.message} />)


    function addMessage(){
            props.addMessage()
            // props.dispatch(AddMessageAC())
    }

    function onMessageChange(e:ChangeEvent<HTMLTextAreaElement>){
        props.updateMessageText(e.currentTarget.value)
        // props.dispatch(UpdateMessageTextAC(e))
    }
    return (
        <div className={s.dialog}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea onChange={onMessageChange} value={props.newMessageText}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>

    );
};

export default Dialogs;