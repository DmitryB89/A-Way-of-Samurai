import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'

export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/5231775/pub_62c955cc8298c16d4f273b70_62c955ec53e39724e0d82831/scale_1200',
                followed: true,
                fullName: 'Dmitry',
                status: 'Boss',
                location:
                    {
                        city: 'Rostov-on-Don',
                        country: 'Russia'
                    }
            },
            {
                id: 2,
                photoUrl: 'https://st03.kakprosto.ru/images/article/2018/11/17/338167_5bf0279d0eae05bf0279d0eb1a.jpeg',
                followed: true,
                fullName: 'Alena',
                status: 'Housewife',
                location:
                    {
                        city: 'Rostov-on-Don',
                        country: 'Russia'
                    }
            },
            {
                id: 3,
                photoUrl: 'https://www.nme.com/wp-content/uploads/2019/04/Jason-Statham.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'Designer',
                location:
                    {
                        city: 'Moscow',
                        country: 'Russia'
                    }
            },

        ])
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="ava" className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

