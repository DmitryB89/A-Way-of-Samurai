import s from './users.module.css'
import userPhoto from '../../assets/Images/user.png'
import React from "react";
import uuid from "react-uuid";
import {toggleIsFollowingProgress, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsTypeWithOnPageChange = {
    usersPage: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId:number) => void
    followingInProgress: Array<number>
}


export const Users: React.FC<UsersPropsTypeWithOnPageChange> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // console.log(this.props.totalUsersCount,this.props.pageSize )
    const pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 15) {
            pages.push(i)
        } else break
    }

    return (
        <div>
            <div>

                {pages.map(p => {

                    return <span key={uuid()}
                                 className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}

            </div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {
                props.usersPage.map(u => <div key={uuid()}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava"
                                 className={s.userPhoto}/>
                                </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true,u.id)

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'feef0a07-2ef5-4686-aa68-187bd79c8c04'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false,u.id)

                                        })

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true,u.id)


                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'feef0a07-2ef5-4686-aa68-187bd79c8c04'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false,u.id)

                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

