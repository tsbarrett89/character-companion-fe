import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import SignOnButton from './signOn/SignOnButton'

const Header = () => {
    const username = useSelector(state => state.authReducer.username)

    return (
        <header>
            <h1>Character Companion</h1>
            {username && <h3>{username}</h3>}
            {username ? <NavLink to='/login'>Log In / Register</NavLink> : <SignOnButton />}
        </header>
    )
}

export default Header