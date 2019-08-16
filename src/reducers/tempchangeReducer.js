import initialState from '../data/initialState'
import {CHANGETEMP} from '../data/actionConstants'

export default function (state = initialState, action) {
  switch(action.type){
    // console.log ("I am changing the temperature")
    case CHANGETEMP:
      return state+1;
    default:
      return state;
  }
}
