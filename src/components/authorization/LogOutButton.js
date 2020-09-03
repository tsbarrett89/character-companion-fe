import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logOut } from '../../actions/auth'

const LogOutButton = () => {

    return (
        <NavLink onClick={logOut} to='/'>Log Out</NavLink>
    )
}

export default LogOutButton