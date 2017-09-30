import { ADD_MESSAGE, REMOVE_MESSAGE } from './actions';

// Initial State
const initialState = {
  messages: [],
}

const AppReducer = (state = initialState, action) => {
  let newState = { ...state }

  switch (action.type) {

    case ADD_MESSAGE: {
      if (action.message) {
        newState.messages = state.messages.slice()
        newState.messages.push(action.message)
      }
      break
    }

    case REMOVE_MESSAGE: {
      if (newState.messages.length) {
        newState.messages = state.messages.slice(1)
      }
      break
    }
  }

  return newState
}

export default AppReducer
