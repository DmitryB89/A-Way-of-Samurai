import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


export function withAuthRedirect<T>(Component: React.ComponentType<T>) {

    type MapStateToPropsType = {
        isAuth: boolean
    }

    const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>


        // @ts-ignore
        return <Component { ...restProps as T} />

    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}

