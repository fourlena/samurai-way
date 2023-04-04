import React from 'react';
// import s from './Profile.module.css'
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {AppRootStateType} from "../../redux/redux-store";
import MypostsContainer from "./Myposts/MypostsContainer";
import {EmptyObject, Store} from "redux";
import {mapStateToPropsType, ProfilePagePropsType} from "./ProfileContainer";
import {ProfileDataType} from "../../redux/ProfileReducer";

type ProfilePropsType={
    store: Store<EmptyObject & AppRootStateType, any>
}
type ProfileProps={
    profile: ProfileDataType | null
    status:string
    updateStatus:(status:string)=>void
}


function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MypostsContainer />
        </div>);

};

export default Profile;