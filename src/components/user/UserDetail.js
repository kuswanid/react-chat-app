import React, {useState, useEffect} from 'react'
import Firebase from '../../config/Firebase'
import Navbar from '../layout/Navbar'

const UserDetail = (props) => {
    const [user, setUser] = useState({})
    
    useEffect(() => {
        Firebase.firestore().collection('users').doc(props.match.params.id).get().then(snapshot => {
            setUser(snapshot.data())
        })
    }, [props.match.params.id])

    return (
        <>
            <Navbar />
            <div className="profile">
                <img src="https://placeimg.com/100/100/people" alt=""/>
                <p className="username">{user.username}</p>
                <p className="bio">Im</p>
                <div className="follow">
                    <div>
                        <span>2.348</span>
                        <p>Followers</p>
                    </div>
                    <div>
                        <span>689</span>
                        <p>Following</p>
                    </div>
                </div>
                <p className="title">Personal Informtion</p>
                <div className="personal">
                    <li>
                        <h4>Phone</h4>
                        <p>+62 85 3522 42714</p>
                    </li>
                    <li>
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </li>
                    <li>
                        <h4>Address</h4>
                        <p>St. Petersmith 456</p>
                    </li>
                </div>
            </div>
        </>
    )
}

export default UserDetail