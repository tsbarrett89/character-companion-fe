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
            <span className="navDrop">
                <h3>{username}</h3>
                <img src={downWhite} alt="open nav drop down menu"
                     onClick={() => setHidden(!hidden)}
                />
            </span>
            {!hidden &&
                <ul className="dropDown">
                    <LogOutButton />
                </ul>
            }
        </div>
    )
}

export default NavDropDown