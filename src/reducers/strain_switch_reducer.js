import {strains} from '../data/strains.js'
import initialState from '../data/initialState'
import {CHANGESTRAIN} from '../data/actionConstants'

export default function (state = initialState, action) {
  switch(action.type){
    case CHANGESTRAIN:
      return strains[action.name]
    default:
      return state;
  }
}
