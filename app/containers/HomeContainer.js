import React, { PropTypes, Component } from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
require('../stylesheets/main.less')
require('firebase/database')
var firebase = require('firebase/app')

  // Initialize Firebase
let config = {
  apiKey: 'AIzaSyCPsZyfG0OAt5fGM8aYO_Od-qqrZO23Zuc',
  authDomain: 'quality-todo.firebaseapp.com',
  databaseURL: 'https://quality-todo.firebaseio.com',
  storageBucket: 'quality-todo.appspot.com'
}
firebase.initializeApp(config)

function writeItem (itemID, text, isComplete) {
  firebase.database().ref('items/' + itemID).set({
    itemID: itemID,
    text: text,
    isComplete: isComplete
  })
}

class HomeContainer extends Component {
  componentDidMount () {
    writeItem('abcde', 'My first item', false)
  }
  render () {
    return (
      <Home />
    )
  }
}

HomeContainer.propTypes = {
  children: PropTypes.any
}

function mapStateToProps () {
  return {}
}


export default connect(
  mapStateToProps
)(HomeContainer)
