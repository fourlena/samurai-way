import React from 'react';
import {connect} from "react-redux";
import {ProfileDataType, SetUsersProfileAC} from "../../redux/ProfileReducer";
import {SetAuthUserDataAC, SetUsersProfileTC} from "../../redux/AuthReducer";
import {AppRootStateType} from "../../redux/redux-store";
import Header from "./Header";
import {authApi} from "../../api/api";

export type mapStateToPropsType ={
    isAuth: boolean
    login: string | null
}

// setAuthUserData: (userId: number | null,email : string | null,login :string | null)=>void

type mapDispatchToPropsType={
    setAuthUserData: ()=>void
}
type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType, HeaderPropsType> {
    componentDidMount() {
        this.props.setAuthUserData()
        // authApi.getAuth().then(data => {
        //         if(data.resultCode === 0){
        //             let {id,email,login} = data.data
        //             this.props.setAuthUserData(id,email,login)
        //         }
        //     })
    }
    render (){
       return  <Header {...this.props} />
    }
};

let mapStateToPropsType = (state:AppRootStateType):mapStateToPropsType=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToPropsType,{
    setAuthUserData: SetUsersProfileTC
}) (HeaderContainer);