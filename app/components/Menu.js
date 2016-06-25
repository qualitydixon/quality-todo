import React, { PropTypes } from 'react'

export default function Menu (props) {
  return (
    <div className='menu'>
      <button onClick={props.showAll}>{'All'}</button>
      <button onClick={props.showComplete} className='btn btn-danger delete'>{'Completed'}</button>
      <button onClick={props.showTodo} className='btn btn-info'>{'Todo'}</button>
    </div>
  )
}

Menu.propTypes = {
  showAll: PropTypes.func.isRequired,
  showComplete: PropTypes.func.isRequired,
  showTodo: PropTypes.func.isRequired
}
