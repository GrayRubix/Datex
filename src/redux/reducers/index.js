import { combineReducers } from 'redux';
import { userInfoReducer, userNameReducer, userPasswordReducer } from './userInfoReducer';
import { bourseDataReducer } from './bourseDataReducer'

export const reducers = combineReducers({
    bourseData: bourseDataReducer,
    userName: userNameReducer,
    password: userPasswordReducer,
    Info : userInfoReducer,
})