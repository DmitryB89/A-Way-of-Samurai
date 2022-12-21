import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios"
import userPhoto from '../../assets/Images/user.png'
import React from "react";
import {inspect} from "util";


export class Users extends React.Component<UsersPropsType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    // if (this.props.usersPage.users.length === 0)

    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}$count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        // console.log(this.props.totalUsersCount,this.props.pageSize )
        const pages: Array<number> = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span key={new Date().getTime().toString()}
                                     className={this.props.currentPage === p ? s.selectedPage : ''}
                                     onClick={(e) => {
                                         this.onPageChanged(p)
                                     }}
                        >{p}</span>
                    })}

                </div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.usersPage.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava"
                                 className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                this.props.follow(u.id)
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
}
