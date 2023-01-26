import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {type} from "os";
import {authAPI} from "../../api/api";
import {AppStateType} from "../../redux/redux-store";
import {addPostAC, newTextChangeHandlerAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "../Profile/MyPosts/MyPosts";
import {login} from "../../redux/auth-reducer";

export const LoginForm = () => {

    type Inputs = {
        login: string,
        email: string
        password: string
        rememberMe: boolean
    };

    // const Alert:React.FC = () => {
    //     useEffect(() => {
    //         const timeout = setTimeout(() => {
    //         }, 3000)
    //         return () => clearTimeout(timeout)
    //     }, [])
    //     return <span>This field is required</span>
    // }


    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) =>
        login(data.login, data.password, data.rememberMe)        // console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={'Email'} type="text" {...register("login", {required: true})}/>
                {errors.login?.type === 'required' && <p role="alert">First name is required</p>}
            </div>
            <div>
                <input placeholder={'Password'} type="password" {...register("password", {required: true})}/>
            </div>
            <div>
                <input type={'checkbox'} {...register('rememberMe')}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};


const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)