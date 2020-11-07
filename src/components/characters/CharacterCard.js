import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ character }) => {

    return (
        <Link to={`/character-sheet/${character.name}`}>
            <h2>{character.name}</h2>
            {character.class.map(classType => <p key={classType.id}>{classType.class}</p>)}
            <h3>Level {character.level}</h3>
            <p>{character.race}</p>
            <p>{character.background}</p>
        </Link>
    )
}

export default CharacterCard