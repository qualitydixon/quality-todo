import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './modules'
import List from './components/List'

let store = createStore(combineReducers({...reducers}), compose(
              applyMiddleware(thunk),
              window.devToolsExtension ? window.devToolsExtension() : f => f
            ))



ReactDOM.render(<Provider store={store}>
                  <List />
                </Provider>, document.getElementById('app'))
