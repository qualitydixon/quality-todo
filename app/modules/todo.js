const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export function addItem (text) {
  return {
    type: ADD_ITEM,
    text,
    itemID: 1,
    isComplete: false
  }
}

export function removeItem (itemID) {
  return {
    type: REMOVE_ITEM,
    itemID
  }
}

export function toggleComplete (itemID) {
  return {
    type: TOGGLE_COMPLETE,
    itemID
  }
}

const initialState = {
  items: [
    {
      id: 0,
      text: 'get job',
      isComplete: false
    }
  ]
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, action)
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todo
