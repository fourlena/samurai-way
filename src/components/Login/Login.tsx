import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login:string
    password: string
    rememberMe : boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field name="login" component="input" placeholder={'login'} /></div>
                <div><Field name="password" component="input" placeholder={'password'} /></div>
                <div><Field name="rememberMe" component="input" type={'checkbox'} /> remember me</div>
                <div><button>Login</button></div>
            </form>
        </div>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData:FormDataType)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};


