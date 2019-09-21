import {CHANGESTRAIN} from '../data/actionConstants'


export function changeStrainAction (strainname) {
  return {
    type: CHANGESTRAIN,
    name: strainname,
  }
}
