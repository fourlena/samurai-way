import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {mapStateToPropsType, ProfilePagePropsType} from "../ProfileContainer";
import userPhoto from "../../../assets/images/avatar.png";
import {userPagePropsType} from "../../Users/UsersContainer";
import {ProfileDataType} from "../../../redux/ProfileReducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoProps = {
    profile: ProfileDataType | null
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoProps) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            {/*<div>*/}
            {/*    <img src="https://avatars.mds.yandex.net/i?id=01dc12186643ecd18a4b62c2079035f1-5746783-images-thumbs&n=13"/>*/}
            {/*</div>*/}

            <div className={s.description}>
                <img className={s.avatar}
                     src={props.profile.photos.large == undefined ? userPhoto : props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>Full name : {props.profile.fullName} </div>
                <div>About me : {props.profile.aboutMe} </div>
                <div>Looking for a job : {props.profile.lookingForAJob ? 'Yes' : 'No'} </div>
                <div>Looking for a job description : {props.profile.lookingForAJobDescription} </div>
            </div>
        </div>);
}


export default ProfileInfo;

