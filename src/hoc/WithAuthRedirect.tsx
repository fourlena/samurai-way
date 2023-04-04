import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType={
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state:AppRootStateType):mapStateToPropsForRedirectType=>({
    isAuth:state.auth.isAuth
})


export function withAuthRedirect  <T>(Component:ComponentType<T>){
    const  RedirectComponent = (props:mapStateToPropsForRedirectType) => {
            let {isAuth,...restProps} = props
            if(!isAuth){
                return <Navigate  to={'/login/*'} />
            }
            return <Component {...restProps as T}/>

    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}