import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {UserContextProvider} from './config/UserContext'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/dashboard/Home'
import PostDetail from './components/post/PostDetail'
import CreatePost from './components/post/CreatePost'
import Profile from './components/user/Profile'
import UserList from './components/user/UserList'
import UserDetail from './components/user/UserDetail'

const App = () => {
    return (
        <UserContextProvider>
        <BrowserRouter>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/' exact component={Home} />
            <Route path='/post/:id' component={PostDetail} />
            <Route path='/createpost' component={CreatePost} />
            <Route path='/profile' component={Profile} />
            <Route path='/users' component={UserList} />
            <Route path='/followers' component={UserList} />
            <Route path='/following' component={UserList} />
            <Route path='/user/:id' component={UserDetail} />
        </BrowserRouter>
        </UserContextProvider>
    )
}

export default App