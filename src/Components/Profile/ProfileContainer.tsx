import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {withRouter, WithRouterType} from "../withRouter";


type MapStatePropsType = {
    profile: ProfileType | null
}

type DispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                    this.props.setUserProfile(response.data);
                    console.log(response)
                }
            )
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}

export const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile

})

const WithUrlDataContainerComponent = withRouter(ProfileContainerAPIComponent)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)