import strains from '../data/strains.js'

const BLUEDREAM = 'BLUEDREAM';
const CWEB = 'CWEB';

const initialState = {
  strain : {
    name : "No Strain selected"
  },
  temperature: 100
}

export default function (state = initialState, action) {
  switch(action.type){
    case CWEB:
      // console.log("I should be changing to CW")
      return strains["Charlotte's Web"]
    case BLUEDREAM:
      // console.log("I should be changing to BD")
      return strains["Blue Dream"];
  }
  return state;
}
