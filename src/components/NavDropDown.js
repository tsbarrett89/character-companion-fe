import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './NavDropDown.scss'
import downWhite from '../images/down-arrow-white.png'

import LogOutButton from './authorization/LogOutButton'

const NavDropDown = () => {
    const username = useSelector(state => state.authReducer.username)
    const [hidden, setHidden] = useState(true)

    return (
        <div className="navDropDown">
            <h3
                onMouseEnter={() => setHidden(false)}
                onMouseLeave={() => setHidden(true)}
            >{username}</h3>
            {!hidden &&
                <ul 
                    className="dropDown"
                    onMouseEnter={() => setHidden(false)}
                    onMouseLeave={() => setHidden(true)}
                >
                    <LogOutButton />
                </ul>
            }
        </div>
    )
}

export default NavDropDown