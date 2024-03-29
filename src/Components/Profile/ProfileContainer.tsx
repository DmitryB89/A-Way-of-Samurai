import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {withRouter, WithRouterType} from "../withRouter";
import {compose} from "redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    loggedId: number | null
    isAuth: boolean
}

type DispatchPropsType = {
    getUserProfile: (profile: ProfileType) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type ProfileParamsType = {
    userId: string
}

type ContentPropsType = WithRouterType<ProfileParamsType> & MapStatePropsType
    & DispatchPropsType

export class ProfileContainerAPIComponent extends React.Component<ContentPropsType> {

    componentDidMount() {
        let userId = this.props.params.userId // {userId: '123312'}
        console.log(userId)
        if (userId) {

            // @ts-ignore
            userId = this.props.loggedId
            if (!userId) {
                return <Navigate to={'/login'}/>
            }
        }
        // @ts-ignore
        this.props.getUserProfile(userId)
        // @ts-ignore
        this.props.getStatus(userId)
    }

    render() {
        // if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedId: state.auth.userId,
    isAuth: state.auth.isAuth

})
// let AuthRedirectComponent = withAuthRedirect(ProfileContainerAPIComponent)

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainerAPIComponent)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))
