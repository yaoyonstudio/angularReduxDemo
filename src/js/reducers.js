import { combineReducers } from 'redux'

const TODOS = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO'
}

const initialState = []

function TodosReducer (state = initialState, action) {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return [...state, action.payload]
    case TODOS.REMOVE_TODO:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]
    default:
      return state
  }
}

export const RootReducer = combineReducers({
  todos: TodosReducer
})
