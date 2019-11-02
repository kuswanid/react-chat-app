import React, {useState, useContext} from 'react'
import UserContext from '../../config/UserContext'
import Firebase from '../../config/Firebase'

const Register = (props) => {
    const {setCred} = useContext(UserContext)
    const [input, setInput] = useState({})
    const [error, setError] = useState('')

    const handleRegister = () => {
        Firebase.auth().createUserWithEmailAndPassword(input.email, input.password).then(snapshot => {
            Firebase.firestore().collection('users').doc(snapshot.user.uid).set({
                username: input.username,
                email: input.email,
                create: new Date(),
                followers: [],
                following: []
            })
            localStorage.setItem('i', snapshot.user.uid)
            setCred({uid: snapshot.user.uid})
            props.history.replace('/')
        }).catch(error => {
            setError(error.message)
        })
    }

    return (
        <div className="auth">
            <h1>Register!</h1>
            <input type="text" placeholder="Username" onChange={e => setInput({...input, username: e.target.value})}/>
            <input type="email" placeholder="Email" onChange={e => setInput({...input, email: e.target.value})}/>
            <input type="password" placeholder="Password" onChange={e => setInput({...input, password: e.target.value})}/>
            <span>{error}</span>
            <button onClick={handleRegister}>Register</button>
            <p className="link1" onClick={() => props.history.replace('/login')}>Login</p>
        </div>
    )
}

export default Register