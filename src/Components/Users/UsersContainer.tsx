import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";


type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize:number
    totalUsersCount:number
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}



export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType):MapDispatchToPropsType => {
    return {
        usersPage:state.users.users,
        pageSize:state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }

}


// <MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)