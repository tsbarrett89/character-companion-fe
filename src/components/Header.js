import React from 'react'
import { useSelector } from 'react-redux'

import './header.scss'

import SignInButton from './authorization/SignInButton'
import NavDropDown from './NavDropDown'

const Header = () => {
    const username = useSelector(state => state.authReducer.username)

    return (
        <header>
            <div>
                <h1>Character Companion</h1>
            </div>
            {username ? <NavDropDown /> : <SignInButton />}
        </header>
    )
}

export default Header