import React, {ChangeEvent} from 'react';
import {ProfilePagePropsType} from "../ProfileContainer";

type ProfileStatusPropsType={
    status:string,
    updateStatus:(status:string)=>void
}

type StateType={
    editMode:boolean
    status:string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, StateType>{
    state={
        editMode:false,
        status:this.props.status
    }
    activateEditMode = ()=>{
        console.log('this:',this)
        this.setState({editMode:true})
    }
    deactivateEditMode= ()=>{
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange= (e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({status:e.currentTarget.value})
    }
    render(){
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                    <span onClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                </div>}
                {this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} onChange={this.onStatusChange}/>
                </div>}

            </div>
        );
    }

};

export default ProfileStatus;