import { ADD_VALUE, REMOVE_VALUE } from '../actions/actionTypes'

let initialState = {
  newValue:[]
}

export const carrinho = ( state = initialState, action ) => {
  switch ( action.type ){
    case ADD_VALUE:
      return{
        ...state,
        newValue: [...state.newValue, action.newValue]
      }
    case REMOVE_VALUE:
      return {
       newValue: state.newValue.filter( (item)  => item[2] !== action.remove )
      }
    default:
      return state
  }
}