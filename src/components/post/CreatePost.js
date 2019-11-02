import React, {useState, useContext} from 'react'
import UserContext from '../../config/UserContext'
import Firebase from '../../config/Firebase'
import Navbar from '../layout/Navbar'

const CreatePost = (props) => {
    const {cred} = useContext(UserContext)
    const [input, setInput] = useState({})

    const handleSave = () => {
        props.history.replace('/')
        Firebase.firestore().collection('posts').add({
            text: input.text,
            author: cred.uid,
            create: new Date()
        })
    }

    return (
        <>
            <Navbar />
            <div className="create-post">
                <textarea placeholder="What do you think?" onChange={e => setInput({...input, text: e.target.value})}/>
                <button onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default CreatePost