import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {type} from "os";

export const LoginForm = () => {

    type Inputs = {
        login: string,
        password:string
        exampleRequired:string
    };

    // const Alert:React.FC = () => {
    //     useEffect(() => {
    //         const timeout = setTimeout(() => {
    //         }, 3000)
    //         return () => clearTimeout(timeout)
    //     }, [])
    //     return <span>This field is required</span>
    // }




    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={'Login'} type="text" {...register("login", { required: true })}/>
                {errors.login?.type === 'required' && <p role="alert">First name is required</p>}
            </div>
            <div>
                <input placeholder={'Password'} type="password" {...register("password", { required: true })}/>
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
                <input type={'checkbox'} {...register}/> remember me
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
