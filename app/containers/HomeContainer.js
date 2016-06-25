import React, { PropTypes, Component } from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
require('../stylesheets/main.less')


class HomeContainer extends Component {
  componentDidMount () {
    // getItems
    // dispatch()
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