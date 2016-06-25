//import { ref } from './constants'

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

export function writeItem (db, itemID, text, isComplete) {
  db.ref('items/' + itemID).set({
    itemID: itemID,
    text: text,
    isComplete: isComplete
  })
}
