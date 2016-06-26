import { write, update, deleteItem, fetchItems, setComplete } from '../config/api'

const ADD_ITEM = 'ADD_ITEM'
const ADD_ITEMS = 'ADD_ITEMS'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

const FETCHING_ITEMS = 'FETCHING_ITEMS'
const FETCHING_ITEMS_SUCCESS = 'FETCHING_ITEMS_SUCCESS'
const FETCHING_ITEMS_ERROR = 'FETCHING_ITEMS_ERROR'

export function addItem (text, id) {
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
  return {
    type: REMOVE_ITEM,
    itemID
  }
}

export function updateItem (itemID, text) {
  return {
    type: UPDATE_ITEM,
    itemID,
    text
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
/*
  Currently, nothing is done with the FETCHING_ITEMS_SUCCESS and FETCHING_ITEMS_ERROR but
  this structure is best practice for retrieving data.
*/
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
      write(action.itemID, action.text, action.isComplete)
      return Object.assign({}, state, {[action.itemID]: {
        text: action.text,
        itemID: action.itemID,
        isComplete: action.isComplete
      }})

    case ADD_ITEMS:
      return Object.assign({}, state, action.items)

    case REMOVE_ITEM:
      delete newState[action.itemID]
      deleteItem(action.itemID)
      return newState

    case UPDATE_ITEM:
      update(action.itemID, action.text)
      newState[action.itemID].text = action.text
      return newState

    case TOGGLE_COMPLETE:
      setComplete(action.itemID, action.isComplete)
      newState[action.itemID].isComplete = !state[action.itemID].isComplete
      return newState

    default:
      return state
  }
}

export default items
