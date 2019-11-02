import React, {useState, createContext} from 'react'

const UserContext = createContext()

export const UserContextProvider = (props) => {
    const [cred, setCred] = useState({uid: localStorage.getItem('i')})
    console.log(cred)

    return (
        <UserContext.Provider value={{cred, setCred}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext