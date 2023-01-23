import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {withRouter, WithRouterType} from "../withRouter";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "../Dialogs/Dialogs";
import {compose} from "redux";


type MapStatePropsType = {
    profile: ProfileType | null
    status:string
}

type MapStatePropsTypeForRedirectType = {
    isAuth: boolean
}


type DispatchPropsType = {
    getUserProfile: (profile: ProfileType) => void
    getStatus: (userId:number) => void
    updateStatus:(status:string) => void
}
type OwnPropsType = MapStatePropsType & DispatchPropsType

type ProfileParamsType = {
    userId: string
}

type PropsType = WithRouterType<ProfileParamsType> & OwnPropsType


export class ProfileContainerAPIComponent extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.params.userId // {userId: '123312'}
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        // if (!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )

    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status
})
// let AuthRedirectComponent = withAuthRedirect(ProfileContainerAPIComponent)

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus,updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainerAPIComponent)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))
