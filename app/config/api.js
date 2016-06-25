require('firebase/database')
let firebase = require('firebase/app')

let config = {
  apiKey: 'AIzaSyCPsZyfG0OAt5fGM8aYO_Od-qqrZO23Zuc',
  authDomain: 'quality-todo.firebaseapp.com',
  databaseURL: 'https://quality-todo.firebaseio.com',
  storageBucket: 'quality-todo.appspot.com'
}
firebase.initializeApp(config)

let db = firebase.database()

export function fetchItems () {
  return db.ref('items/').once('value')
    .then((snapshot) => snapshot.val() || {})
}

export function writeItem (itemID, text, isComplete) {
  db.ref('items/' + itemID).set({
    itemID,
    text,
    isComplete
  })
}

export function setComplete (itemID, isComplete) {
  db.ref('items/' + itemID).update({
    itemID: itemID,
    isComplete: !isComplete
  })
}

export function deleteItem (itemID) {
  db.ref('items/' + itemID).remove()
}
