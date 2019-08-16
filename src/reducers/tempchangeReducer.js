import strains from '../data/strains.js'

const BLUEDREAM = 'BLUEDREAM';
const CWEB = 'CWEB';
const CHANGETEMP = 'CHANGETEMP'

const initialState = {
  strain : {
    name : "No Strain selected"
  },
  temperature: 100
}

export default function (state = initialState, action) {
  switch(action.type){
    // console.log ("I am changing the temperature")
    case CHANGETEMP:
      return state+1;
    default:
      return state;
  }
}
