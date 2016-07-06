import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './modules'
import List from './components/List'

let store = createStore(combineReducers({...reducers}), window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(<Provider store={store}>
                  <List />
                </Provider>, document.getElementById('app'))
