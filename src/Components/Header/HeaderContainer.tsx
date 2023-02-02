import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";


type MapStatePropsType = {}
//
type DispatchPropsType = {
    // setAuthUserData: (userId: string, email: string, login: string) => void
    getAuthUserData: () => void
    logout:() => void
}
//
export type HeaderContainerPropsType = MapStatePropsType & DispatchPropsType


export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
