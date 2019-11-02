import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../../config/UserContext'
import Firebase from '../../config/Firebase'
import Navbar from '../layout/Navbar'

const Profile = () => {
    const {cred} = useContext(UserContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        Firebase.firestore().collection('users').doc(cred.uid).get().then(snapshot => {
            setUser(snapshot.data())
        })
    }, [cred.uid])

    return (
        <>
            <Navbar />
            <div className="profile">
                <img src="https://placeimg.com/100/100/people" alt=""/>
                <p className="username">{user.username}</p>
                <p className="bio">I'm Web Developer</p>
                <div className="follow">
                    <div>
                        <span>{user.followers ? user.followers.length : '0'}</span>
                        <p>Followers</p>
                    </div>
                    <div>
                        <span>{user.following ? user.following.length : '0'}</span>
                        <p>Following</p>
                    </div>
                </div>
                <p className="title">Personal Information</p>
                <div className="personal">
                    <li>
                        <h4>Phone</h4>
                        <p>+62 853 5224 2714</p>
                    </li>
                    <li>
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </li>
                    <li>
                        <h4>Address</h4>
                        <p>St. Petersburg 234</p>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Profile