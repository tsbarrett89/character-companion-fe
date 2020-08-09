import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCharacters } from '../../actions/users'

const CharacterList = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.userReducer.characters)
    const currentUser = useSelector(state => state.authReducer.user_id)

    console.log(currentUser)

    useEffect(() => {
        dispatch(fetchCharacters(currentUser))
    }, [currentUser])

    return (
        <div>
            {characters.map(character => <p>{character.name}</p>)}
        </div>
    )
}

export default CharacterList