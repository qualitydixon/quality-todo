import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './modules'
import HomeContainer from './containers/HomeContainer'

let store = createStore(combineReducers({...reducers}))
console.log(store)
console.log(store.getState())

ReactDOM.render(<Provider store={store}>
                  <HomeContainer />
                </Provider>, document.getElementById('app'))
