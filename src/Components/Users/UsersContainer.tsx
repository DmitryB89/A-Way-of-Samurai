import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import preloader from '../../assets/Images/25.svg'
import {usersAPI} from "../../api/api";

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                }
            )
    }

    render() {

        return <>
            {this.props.isFetching ? <img src={"preloader"} alt=""/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setUsers={this.props.setUsers}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setCurrentPage={this.props.setCurrentPage}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}


type MapStatePropsType = {
    usersPage: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>

}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void

}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//
// }


// <MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,


})(UsersAPIComponent )