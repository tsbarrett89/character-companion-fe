import axios from 'axios'

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START"
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE"

export const fetchCharacters = user_id => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START })
    axios
        .get(`http://localhost:5000/characters/all/${user_id}`)
        .then(res => {
            res.data.forEach(character => {
                axios.get(`http://localhost:5000/class/classes/${character.id}`)
                    .then(response => {
                        dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: {...character, class: response.data }})
                    })
                    .catch(err => console.log(err.response))
            })
        })
        .catch(err => dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err.response }))
}