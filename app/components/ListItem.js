import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../modules/todo'

export default function ListItem (props) {
  const className = props.isComplete ? 'completed' : ''
  let input
  return (
    <li className='card'>
      <form
        className='itemForm'
        onSubmit={e => {
          e.preventDefault()
          props.dispatch(updateItem(input.value, props.itemID))
          input.value = props.text
          input.blur()
        }}>
        <input
          onChange={() => props.dispatch(updateItem(input.value, props.itemID))}
          value={props.text}
          ref={node => { input = node }}
        />
      </form>
      <button onClick={props.onDelete} className='btn btn-danger delete'>
        <i className='fa fa-trash' aria-hidden='true'></i>
      </button>
      <button onClick={props.onToggle} className='btn btn-info'>
        <i className='fa fa-check' aria-hidden='true'></i>
      </button>
    </li>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  itemID: PropTypes.string.isRequired
}

export default connect()(ListItem)
