import strains from '../data/strains.js'
import initialState from '../data/initialState'
import {CWEB, BLUEDREAM} from '../data/actionConstants'

export default function (state = initialState, action) {
  switch(action.type){
    case CWEB:
      // console.log("I should be changing to CW")
      return strains["Charlotte's Web"]
    case BLUEDREAM:
      // console.log("I should be changing to BD")
      return strains["Blue Dream"];
    default:
      return state;
  }
}
