import {combineReducers} from 'redux'
import category from './category'
import note from './note'
const appReducer = combineReducers({
    category,
    note
})


export default appReducer   