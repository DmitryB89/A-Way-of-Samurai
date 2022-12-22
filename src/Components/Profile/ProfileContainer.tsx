
import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";


export class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                    this.props.setUserProfile(response.data);
                }
            )
    }

    render()
    {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}

export const mapStateToProps=(state:AppStateType) => ({
    profile:state.profilePage.profile

})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)