import React, { PropTypes } from 'react'

export default function ListItem (props) {
  const className = props.isComplete ? 'completed' : ''
  return (
    <li className='card'>
      <p className={className}>{props.text}</p>
      <button onClick={props.onDelete} className='btn btn-danger delete'>
        <i className='fa fa-times' aria-hidden='true'></i>
      </button>
      <button onClick={props.onToggle} className='btn btn-info'>
        <i className='fa fa-check' aria-hidden='true'></i>
      </button>
      <button onClick={props.onToggle} className='btn btn-info'>
        <i className='fa fa-pencil' aria-hidden='true'></i>
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
