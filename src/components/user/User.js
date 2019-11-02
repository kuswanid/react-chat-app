import React, {useState, useContext} from 'react'
import UserContext from '../../config/UserContext'
import Firebase from '../../config/Firebase'
import {withRouter} from 'react-router-dom'

const User = (props) => {
    const {cred} = useContext(UserContext)
    const [hasFollowing, setHasFollowing] = useState(props.hasFollowing.map(doc => doc.user).includes(props.id))

    const handleDetail = () => {
        props.history.push(`/user/${props.id}`)
    }

    const handleFollow = () => {
        props.hasFollowing.push({user: props.id, time: new Date()})
        Firebase.firestore().collection('users').doc(cred.uid).set({
            following: props.hasFollowing
        }, {merge: true})
        props.user.followers.push({user: cred.uid, time: new Date()})
        Firebase.firestore().collection('users').doc(props.id).set({
            followers: props.user.followers
        }, {merge: true})
        setHasFollowing(true)
    }

    return (
        <div className="user">
            <img src="https://placeimg.com/100/100/people" alt=""/>
            <p className="username" onClick={handleDetail}>{props.user.username}</p>
            <p className="bio">I'm Web Developer</p>
            {hasFollowing ? null : <i className="mi-plus" onClick={handleFollow}/>}
        </div>
    )
}

export default withRouter(User)