import { GET_CURRENCIES_REQUEST, GET_CURRENCIES_SUCCESS } from '../constants/page'

const initialState = {
  year: 2017,
  currencies: [],
  fetching: false
};

export default function page(state = initialState, action) {
  if (action.type === GET_CURRENCIES_REQUEST) {
    return {...state, year: action.payload, fetching: true}
  }

  if (action.type === GET_CURRENCIES_SUCCESS) {
    return {...state, currencies: action.payload, fetching: false}
  }
  return state;
}