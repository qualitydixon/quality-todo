require('firebase/database')
const firebase = require('firebase/app')
const config = {
  apiKey: 'AIzaSyCPsZyfG0OAt5fGM8aYO_Od-qqrZO23Zuc',
  authDomain: 'quality-todo.firebaseapp.com',
  databaseURL: 'https://quality-todo.firebaseio.com',
  storageBucket: 'quality-todo.appspot.com'
}
firebase.initializeApp(config)

const db = firebase.database()

export function fetchItems () {
  return db.ref('items/').once('value')
    .then((snapshot) => snapshot.val() || {})
}

export function write (itemID, text, isComplete) {
  db.ref('items/' + itemID).set({
    itemID,
    text,
    isComplete
  })
}

export function update (itemID, text) {
  db.ref('items/' + itemID).update({
    text
  })
}

export function setComplete (itemID, isComplete) {
  db.ref('items/' + itemID).update({
    isComplete: !isComplete
  })
}

export function deleteItem (itemID) {
  db.ref('items/' + itemID).remove()
}
