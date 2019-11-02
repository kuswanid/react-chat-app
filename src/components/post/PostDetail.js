import React, {useState, useEffect} from 'react'
import Firebase from '../../config/Firebase'
import Navbar from '../layout/Navbar'

const PostDetail = (props) => {
    const [post, setPost] = useState({})
    const [author, setAuthor] = useState({})

    useEffect(() => {
        Firebase.firestore().collection('posts').doc(props.match.params.id).get().then(snapshot => {
            setPost(snapshot.data())
            Firebase.firestore().collection('users').doc(snapshot.data().author).get().then(author => {
                setAuthor(author.data())
            })
        })
    }, [props.match.params.id])

    return (
        <>
            <Navbar />
            <div className="post-detail">
                <img src="https://placeimg.com/100/100/people" alt=""/>
                <p className="author">{author.username}</p>
                <p className="text">{post.text}</p>
            </div>
        </>
    )
}

export default PostDetail