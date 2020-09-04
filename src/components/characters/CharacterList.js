import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCharacters } from '../../actions/users'

import CharacterCard from './CharacterCard'

const CharacterList = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.userReducer.characters)
    const currentUser = useSelector(state => state.authReducer.user_id)

    useEffect(() => {
        dispatch(fetchCharacters(currentUser))
    }, [currentUser])

    return (
        <div>
            {characters.map(character => <CharacterCard key={character.id} character={character} />)}
        </div>
    )
}

export default CharacterList