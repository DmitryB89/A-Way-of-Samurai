import React, {FC, ReactElement, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {type} from "os";
import {authAPI} from "../../api/api";
import {AppStateType} from "../../redux/redux-store";
import {addPostAC, newTextChangeHandlerAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "../Profile/MyPosts/MyPosts";
import {login} from "../../redux/auth-reducer";
import {redirect, useNavigate} from "react-router-dom";
import {Dispatch} from "redux";



type LoginFormPropsType = {
    isAuth?: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

type Inputs = {
    email: string
    password: string
    rememberMe: boolean
};

export const LoginForm = (props: any) => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
                <input placeholder={'Email'} type="text" {...register("email", {required: true})}/>
                {errors.email?.type === 'required' && <p role="alert">First name is required</p>}
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

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const Login = (props: any):ReactElement | null => {
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        props.login(data.email, data.password, data.rememberMe)
    }

    if (props.isAuth) {
        navigate('/profile')
        return null
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};


// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//     {login}
//     }
// }

export const LoginContainer = connect(mapStateToProps, {login})(Login)

// const Alert:React.FC = () => {
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//         }, 3000)
//         return () => clearTimeout(timeout)
//     }, [])
//     return <span>This field is required</span>
// }
