import React from 'react'
import {withRouter} from 'react-router-dom'

const Sidebar = (props) => {
    const handleClick = (path) => {
        props.closeSidebar()
        props.history.replace(path)
    }

    const handleLogout = () => {
        localStorage.clear()
        props.history.replace('/login')
    }

    return (
        <div className="sidebar">
            <div onClick={() => handleClick('/createpost')}>
                <i className="mi-plus-circle"/>
                <p>Create Post</p>
            </div>
            <div onClick={() => handleClick('/profile')}>
                <i className="mi-user"/>
                <p>My Profile</p>
            </div>
            <div>
                <i className="mi-file"/>
                <p>My Post</p>
            </div>
            <div>
                <i className="mi-bookmark"/>
                <p>Bookmark</p>
            </div>
            <div onClick={() => handleClick('/followers')}>
                <i className="mi-user-check"/>
                <p>Followers</p>
            </div>
            <div onClick={() => handleClick('/users')}>
                <i className="mi-users"/>
                <p>Find People</p>
            </div>
            <div>
                <i className="mi-settings"/>
                <p>Settings</p>
            </div>
            <div onClick={() => handleLogout()}>
                <i className="mi-log-out"/>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default withRouter(Sidebar)