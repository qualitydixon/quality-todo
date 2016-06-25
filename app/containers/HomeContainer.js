import React, { PropTypes, Component } from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { fetchAndHandleItems } from '../modules/items'
require('../stylesheets/main.less')

class HomeContainer extends Component {
  componentDidMount () {
    fetchAndHandleItems(this.props.dispatch)
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
