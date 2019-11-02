import React, {useState, useContext} from 'react'
import UserContext from '../../config/UserContext'
import Firebase from '../../config/Firebase'

const Login = (props) => {
    const {setCred} = useContext(UserContext)
    const [input, setInput] = useState({})
    const [error, setError] = useState('')

    const handleLogin = () => {
        Firebase.auth().signInWithEmailAndPassword(input.email, input.password).then(snapshot => {
            localStorage.setItem('i', snapshot.user.uid)
            setCred({uid: snapshot.user.uid})
            props.history.replace('/')
        }).catch(error => {
            setError(error.message)
        })
    }

    return (
        <div className="auth">
            <h1>Welcome!</h1>
            <input type="email" placeholder="Email" onChange={e => setInput({...input, email: e.target.value})}/>
            <input type="password" placeholder="Password" onChange={e => setInput({...input, password: e.target.value})}/>
            <span>{error}</span>
            <button onClick={handleLogin}>Login</button>
            <p className="link1">Forgot Password?</p>
            <p className="link2" onClick={() => props.history.replace('/register')}>Register</p>
        </div>
    )
}

export default Login