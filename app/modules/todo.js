import update from 'react/lib/update'
import { makeID } from '../config/helpers'

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export function addItem (text, id) {
  console.log(id)
  return {
    type: ADD_ITEM,
    text,
    itemID: id,
    isComplete: false
  }
}

export function removeItem (itemID) {
  console.log(itemID)
  return {
    type: REMOVE_ITEM,
    itemID
  }
}

export function updateItem (text, itemID) {
  console.log('update')
  return {
    type: UPDATE_ITEM,
    itemID,
    text
  }
}

export function toggleComplete (itemID) {
  return {
    type: TOGGLE_COMPLETE,
    itemID
  }
}

function getInitialState () {
  const id1 = makeID()
  const id2 = makeID()
  return {
    [id1]: {
      text: 'item1',
      isComplete: false,
      itemID: id1
    },
    [id2]: {
      text: 'item2',
      isComplete: false,
      itemID: id2
    }
  }
}


const todo = (state = getInitialState(), action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {[action.itemID]: {
        text: action.text,
        itemID: action.itemID,
        isComplete: action.isComplete
      }})
    case REMOVE_ITEM:
      delete newState[action.itemID]
      return newState
    case UPDATE_ITEM:
      newState[action.itemID].text = action.text
      return newState
    case TOGGLE_COMPLETE:
      console.log('toggle')
      newState[action.itemID].isComplete = !state[action.itemID].isComplete
      return newState
    default:
      return state
  }
}

export default todo
