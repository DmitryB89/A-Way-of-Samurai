import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {ProfilePageType} from "../../redux/types";

type ProfileContainerProps = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType

}

export class ProfileContainerAPIComponent extends React.Component<ProfileContainerProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export const mapStateToProps = (state: ProfilePageType) => ({
    profile: state.profile

})

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerAPIComponent)