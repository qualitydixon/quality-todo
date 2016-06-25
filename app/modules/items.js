import { makeID } from '../config/helpers'
import { writeItem, deleteItem, fetchItems, setComplete } from '../config/api'

const ADD_ITEM = 'ADD_ITEM'
const ADD_ITEMS = 'ADD_ITEMS'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

const FETCHING_ITEMS = 'FETCHING_ITEMS'
const FETCHING_ITEMS_SUCCESS = 'FETCHING_ITEMS_SUCCESS'
const FETCHING_ITEMS_ERROR = 'FETCHING_ITEMS_ERROR'

export function addItem (text, id) {
  console.log(id)
  return {
    type: ADD_ITEM,
    text,
    itemID: id,
    isComplete: false
  }
}

export function addItems (items) {
  return {
    type: ADD_ITEMS,
    items
  }
}

export function removeItem (itemID) {
  console.log(itemID)
  return {
    type: REMOVE_ITEM,
    itemID
  }
}

export function updateItem (text, itemID, isComplete) {
  console.log('update')
  return {
    type: UPDATE_ITEM,
    itemID,
    text,
    isComplete
  }
}

export function toggleComplete (itemID, isComplete) {
  return {
    type: TOGGLE_COMPLETE,
    itemID,
    isComplete
  }
}

export function fetchingItems () {
  return {
    type: FETCHING_ITEMS
  }
}

export function fetchingItemsSuccess () {
  return {
    type: FETCHING_ITEMS_SUCCESS
  }
}

export function fetchingItemsError () {
  return {
    type: FETCHING_ITEMS_ERROR
  }
}

export function fetchAndHandleItems (dispatch) {
  console.log('!!!!!!!')
  dispatch(fetchingItems())

  fetchItems()
    .then((items) => dispatch(addItems(items)))
    .then(() => dispatch(fetchingItemsSuccess()))
    .catch((error) => dispatch(fetchingItemsError(error)))
}

const items = (state = {}, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case ADD_ITEM:
      writeItem(action.itemID, action.text, action.isComplete)
      return Object.assign({}, state, {[action.itemID]: {
        text: action.text,
        itemID: action.itemID,
        isComplete: action.isComplete
      }})
    case ADD_ITEMS:
      console.log('Add Items')
      return Object.assign({}, state, action.items)
    case REMOVE_ITEM:
      delete newState[action.itemID]
      deleteItem(action.itemID)
      return newState
    case UPDATE_ITEM:
      writeItem(action.itemID, action.text, action.isComplete)
      newState[action.itemID].text = action.text
      return newState
    case TOGGLE_COMPLETE:
      console.log('toggle')
      setComplete(action.itemID, action.isComplete)
      newState[action.itemID].isComplete = !state[action.itemID].isComplete
      return newState
    default:
      return state
  }
}

export default items
