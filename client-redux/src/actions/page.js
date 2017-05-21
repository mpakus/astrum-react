import { GET_CURRENCIES_REQUEST, GET_CURRENCIES_SUCCESS } from '../constants/page'

export function getCurrencies(year){
  return (dispatch) => {
    dispatch({
      type: GET_CURRENCIES_REQUEST,
      payload: year
    });

    setTimeout( ()=> {
        dispatch({
          type: GET_CURRENCIES_SUCCESS,
          payload: [1, 5, 10, 15, 20]
        })
      }, 1000
    )
  }
}