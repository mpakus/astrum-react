import { SET_YEAR } from '../constants/page'

export function setYear(year){
  return {
    type: SET_YEAR,
    payload: year
  }
}