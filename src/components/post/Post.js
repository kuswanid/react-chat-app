import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import Firebase from '../../config/Firebase'

const Post = (props) => {
    const [author, setAuthor] = useState({})

    const handleDetail = () => {
        props.history.push(`/post/${props.id}`)
    }

    const handleMore = (e) => {
        console.log('More Action')
        e.stopPropagation()
    }

    useEffect(() => {
        Firebase.firestore().collection('users').doc(props.post.author).get().then(snapshot => {
            setAuthor(snapshot.data())
        })
    }, [props.post.author])

    return (
        <div className="post" onClick={handleDetail}>
            <img src="https://placeimg.com/100/100/people" alt=""/>
            <p className="author">{author.username}</p>
            <i className="mi-more-vertical" onClick={handleMore}/>
            <p className="text">{props.post.text}</p>
            <i className="mi-thumbs-up"/>
            <i className="mi-message-circle"/>
        </div>
    )
}

export default withRouter(Post)