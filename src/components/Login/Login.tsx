import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {LoginTC} from "../../redux/AuthReducer";


export type FormDataType = {
    email:string
    password: string
    rememberMe : boolean
}

type LoginProps={
    postLogin:(email:string, password:string, rememberMe:boolean)=>void
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field name="Email" component="input" placeholder={'email'} /></div>
                <div><Field name="Password" component="input" placeholder={'password'} /></div>
                <div><Field name="rememberMe" component="input" type={'checkbox'} /> remember me</div>
                <div><button>Login</button></div>
            </form>
        </div>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)

export const Login = (props:LoginProps) => {
    const onSubmit = (formData:FormDataType)=>{
        props.postLogin(formData.email,formData.password,formData.rememberMe)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

export default connect(null,{postLogin: LoginTC })(Login)
