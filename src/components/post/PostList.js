import React, {useState, useEffect} from 'react'
import Firebase from '../../config/Firebase'
import Post from './Post'

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Firebase.firestore().collection('posts').get().then(snapshot => {
            setPosts(snapshot.docs)
        })
    }, [])

    return (
        <div className="post-list">
            {posts.map(post => (
                <Post key={post.id} id={post.id} post={post.data()} />
            ))}
        </div>
    )
}

export default PostList