import { combineReducers } from 'redux';
import strainReducer from './strain_switch_reducer'
import tempChangeReducer from './tempchangeReducer'

const rootReducer = combineReducers({
    strain: strainReducer,
    temperature: tempChangeReducer
})
export default rootReducer
