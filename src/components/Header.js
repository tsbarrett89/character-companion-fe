import React from 'react'
import { useSelector } from 'react-redux'

import SignOnButton from './signOn/SignOnButton'

const Header = () => {
    const username = useSelector(state => state.authReducer.username)

    return (
        <header>
            <h1>Character Companion</h1>
            {username ? <h3>{username}</h3> : <SignOnButton />}
        </header>
    )
}

export default Header