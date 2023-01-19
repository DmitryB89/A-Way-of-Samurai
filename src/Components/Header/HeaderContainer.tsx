import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


type MapStatePropsType = {}
//
type DispatchPropsType = {
    setAuthUserData: (userId: string, email: string, login: string) => void
}
//
export type HeaderContainerPropsType = MapStatePropsType & DispatchPropsType


export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {userId, email, login} = response.data.data;
                        this.props.setAuthUserData(userId, email, login)
                    }
                }
            )
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state: AppStateType) => ({})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
