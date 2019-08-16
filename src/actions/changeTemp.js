import {CHANGETEMP} from '../data/actionConstants'
export function changeTempAction(value){
  console.log(value);
  return{
    type: CHANGETEMP,
    temp: value
  }
}
