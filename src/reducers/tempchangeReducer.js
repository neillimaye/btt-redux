import initialState from '../data/initialState'
import {CHANGETEMP} from '../data/actionConstants'

export default function (state = initialState, action) {
  // console.log ("I should be changing changing the temperature to");
  // console.log(action.temp)
  switch(action.type){
    case CHANGETEMP:
      return action.temp;
    default:
      return state;
  }
}
