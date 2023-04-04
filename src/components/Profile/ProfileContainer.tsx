import React, {ReactComponentElement} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    ProfileDataType,
    ProfilePageType,
    SetUsersProfileAC,
    getUsersProfileTC,
    getStatusTC, updateStatusTC
} from "../../redux/ProfileReducer";
import {UsersPropsType} from "../../redux/UsersReducer";
import {userPagePropsType} from "../Users/UsersContainer";
// import {ReactComponentProps} from "react-router";
import {Navigate , RouteComponentProps, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";



// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export type mapStateToPropsType={
    profile: ProfileDataType | null
    status:string
}
type mapDispatchToPropsType={
    getUsersProfile: (userId:string)=>void
    getStatus: (userId:string)=>void
}
export type ProfilePagePropsType = RouteComponentProps<PathParamType> & OwnPagePropsType
export type OwnPagePropsType = mapStateToPropsType & mapDispatchToPropsType
type PathParamType ={
    userId:string
    isAuth:boolean
}

class ProfileContainer extends  React.Component<ProfilePagePropsType, ProfilePagePropsType>{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}
                                     status={this.props.status}
                                     updateStatus={this.props.updateStatus}
            />
        );
    }

};


let mapStateToProps = (state:AppRootStateType):mapStateToPropsType=>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,{
        getUsersProfile: getUsersProfileTC,
        getStatus: getStatusTC,
        updateStatus: updateStatusTC,

    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)



