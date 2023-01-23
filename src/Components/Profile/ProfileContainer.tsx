import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {withRouter, WithRouterType} from "../withRouter";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "../Dialogs/Dialogs";
import {compose} from "redux";


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapStatePropsTypeForRedirectType = {
    isAuth: boolean
}


type DispatchPropsType = {
    getUserProfile: (profile: ProfileType) => void
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
    }

    render() {

        // if (!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})
// let AuthRedirectComponent = withAuthRedirect(ProfileContainerAPIComponent)

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainerAPIComponent)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))
