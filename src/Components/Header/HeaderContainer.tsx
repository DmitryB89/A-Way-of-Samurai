import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";


type MapStatePropsType = {}
//
type DispatchPropsType = {
    logout:() => void
}
//
export type HeaderContainerPropsType = MapStatePropsType & DispatchPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

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
export default connect(mapStateToProps, {logout})(HeaderContainer)
