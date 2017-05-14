import { SET_YEAR } from '../constants/page'

const initialState = {
  year: 2017,
  currencies: []
};

export default function page(state = initialState, action){
  console.log(state);
  if(action.type === SET_YEAR){
    return { ...state, year: action.payload }
  }

  return state;
  // switch(action.type){
  //   case 'SET_YEAR':
  //     return
  //   default:
  //     return state
  // }
  // return state;
}
