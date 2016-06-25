//import { ref } from './constants'
import { removeItem } from '../modules/todo'

/*
export function saveToItems (item) {
  const itemId = ref.child('items').push().key()
  const itemPromise = ref.child(`items/${itemId}`).set({...item, itemId})
  return {
    itemId,
    itemPromise
  }
}
*/

export function handleDelete (itemID, dispatch) {
  console.log('delete', itemID)
  dispatch(removeItem(itemID))
}
