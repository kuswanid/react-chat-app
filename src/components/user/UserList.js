import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../../config/UserContext'
import Firebase from '../../config/Firebase'
import Navbar from '../layout/Navbar'
import User from './User'

const UserList = (props) => {
    const {cred} = useContext(UserContext)
    const [hasFollowing, setHasFollowing] = useState([])
    const [users, setUsers] = useState([])
    const [userList, setUserList] = useState([])

    const handleSearch = (e) => {
        setUsers(userList.filter(doc => doc.data().username.includes(e.target.value)))
    }

    useEffect(() => {
        Firebase.firestore().collection('users').get().then(snapshot => {
            setHasFollowing(snapshot.docs.filter(doc => doc.id === cred.uid)[0].data().following)
            if (props.match.path === '/followers') {
                const data = snapshot.docs.filter(doc => doc.id === cred.uid)[0].data().followers.map(doc => doc.user)
                setUsers(snapshot.docs.filter(doc => data.includes(doc.id)))
                setUserList(snapshot.docs.filter(doc => data.includes(doc.id)))
            } else if (props.match.path === '/following') {
                const data = snapshot.docs.filter(doc => doc.id === cred.uid)[0].data().following.map(doc => doc.user)
                setUsers(snapshot.docs.filter(doc => data.includes(doc.id)))
                setUserList(snapshot.docs.filter(doc => data.includes(doc.id)))
            } else {
                setUsers(snapshot.docs.filter(doc => doc.id !== cred.uid))
                setUserList(snapshot.docs.filter(doc => doc.id !== cred.uid))
            }
        })
    }, [cred.uid, props.match.path])

    return (
        <>
            <Navbar />
            <div className="user-list">
                {props.match.path !== '/users' ?
                <div>
                    <span className={props.match.path === '/followers' ? 'line' : null} onClick={() => props.history.push('/followers')}>Followers</span>
                    <span className={props.match.path === '/following' ? 'line' : null} onClick={() => props.history.push('/following')}>Following</span>
                </div> : null}
                <div className="search">
                    <input type="text" placeholder="Search user by name.." onChange={handleSearch}/>
                </div>
                <div className="list">
                    {users.map(user => (
                        <User key={user.id} id={user.id} hasFollowing={hasFollowing} user={user.data()} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserList