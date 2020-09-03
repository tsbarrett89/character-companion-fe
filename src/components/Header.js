import React from 'react'
import { useSelector } from 'react-redux'

import './header.scss'

import SignOnButton from './authorization/SignOnButton'
import LogOutButton from './authorization/LogOutButton'

const Header = () => {
    const username = useSelector(state => state.authReducer.username)

    return (
        <header>
            <h1>Character Companion</h1>
            {username && <h3>{username}</h3>}
            {username ? <LogOutButton /> : <SignOnButton />}
        </header>
    )
}

export default Header