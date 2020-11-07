import { combineReducers } from 'redux'

import authReducer from './authReducer'
import userReducer from './userReducer'
import characterReducer from './characterReducer'

export default combineReducers({
    authReducer,
    userReducer,
    characterReducer
})