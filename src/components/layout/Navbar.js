import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = (props) => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <nav>
                <i className={toggle ? "mi-x" : "mi-menu"} onClick={() => setToggle(!toggle)}/>
                <p onClick={() => props.history.replace('/')}>Franly</p>
                <i className="mi-bell"/>
            </nav>
            {toggle && <Sidebar closeSidebar={() => setToggle(false)} />}
        </>
    )
}

export default withRouter(Navbar)