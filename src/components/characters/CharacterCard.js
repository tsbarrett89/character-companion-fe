import React from 'react'

const CharacterCard = ({ character }) => {

    return (
        <div>
            <h2>{character.name}</h2>
            {character.class.map(classType => <p key={classType.id}>{classType.class}</p>)}
            <h3>Level {character.level}</h3>
            <p>{character.race}</p>
            <p>{character.background}</p>
        </div>
    )
}

export default CharacterCard