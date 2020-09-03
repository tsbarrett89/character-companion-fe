import React from 'react'
import { useSelector } from 'react-redux'

import './header.scss'

import SignInButton from './authorization/SignInButton'
import LogOutButton from './authorization/LogOutButton'

const Header = () => {
    const username = useSelector(state => state.authReducer.username)

    return (
        <header>
            <h1>Character Companion</h1>
            {username ? <a>{username}</a> : <SignInButton />}
        </header>
    )
}

export default Header