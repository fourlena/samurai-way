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
        this.setState({editMode:true})
    }
    deactivateEditMode= ()=>{
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange= (e:ChangeEvent<HTMLInputElement>)=>{
        debugger;
        this.setState({status:e.currentTarget.value})
    }
    componentDidUpdate(prevProps:ProfileStatusPropsType,prevState:StateType){
       if( prevProps.status !== this.props.status){
           this.setState({status:this.props.status })
       }

    }
    render(){
        console.log('render')
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                    <span onClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                </div>}
                {this.state.editMode && <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                </div>}

            </div>
        );
    }

};

export default ProfileStatus;