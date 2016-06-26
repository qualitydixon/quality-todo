var firebase = require('firebase/app')
require('firebase/database')

let config = {
  apiKey: 'AIzaSyCPsZyfG0OAt5fGM8aYO_Od-qqrZO23Zuc',
  authDomain: 'quality-todo.firebaseapp.com',
  databaseURL: 'https://quality-todo.firebaseio.com',
  storageBucket: 'quality-todo.appspot.com'
}
firebase.initializeApp(config)
