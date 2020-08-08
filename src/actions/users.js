import axios from 'axios'

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START"
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE"

export const fetchCharacters = user_id => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START })
    axios
        .get(`http://localhost:5000/characters/all/${user_id}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err.response }))
}