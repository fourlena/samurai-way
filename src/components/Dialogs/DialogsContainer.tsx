import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {AddMessageAC, UpdateMessageTextAC} from "../../redux/DialogReducer";
import Dialogs from "./Dialogs";
import {compose, EmptyObject, Store} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {mapStateToPropsType} from "../Profile/ProfileContainer";
import {getUsersProfileTC} from "../../redux/ProfileReducer";


type DialogPropsType = {
    store: Store<EmptyObject & AppRootStateType, any>
}

let mapStateToProps = (state:AppRootStateType)=>{
    return {
        dialogData: state.messagePage.dialogData,
        messageData: state.messagePage.messageData,
        newMessageText: state.messagePage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch:any)=>{
    return {
        addMessage: ()=>{
            dispatch(AddMessageAC())
        },
        updateMessageText: (newMessage: string)=>{
            dispatch(UpdateMessageTextAC(newMessage))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)