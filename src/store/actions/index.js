import { ADD_VALUE, REMOVE_VALUE } from './actionTypes'


export const addButton = value => ({
  type: ADD_VALUE,
  newValue: value
})

export const removeButton = value => (
  {
  type: REMOVE_VALUE,
  remove: value
})