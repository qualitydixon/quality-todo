import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todo from './modules/todo'
import HomeContainer from './containers/HomeContainer'

let store = createStore(todo)
console.log(store)
console.log(store.getState())

ReactDOM.render(<Provider store={store}>
                  <HomeContainer />
                </Provider>, document.getElementById('app'))
