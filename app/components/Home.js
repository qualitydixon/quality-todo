import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../modules/todo'

function Home ({ dispatch, items }) {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addItem(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type='submit'>
          {'Add Item'}
        </button>
      </form>
      <ul>
        {items.map((item, idx) =>
          <li key={idx}>{item.text}</li>
        )}
      </ul>
    </div>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return {
    items: state.items
  }
}
export default connect(mapStateToProps)(Home)
