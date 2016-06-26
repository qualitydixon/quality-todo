import React, { PropTypes } from 'react'

export default function Menu ({showAll, showComplete, showTodo}) {
  return (
    <div className='menu'>
      <button onClick={showAll} className=''>{'All'}</button>
      <button onClick={showComplete} className=''>{'Completed'}</button>
      <button onClick={showTodo} className=''>{'Todo'}</button>
    </div>
  )
}

Menu.propTypes = {
  showAll: PropTypes.func.isRequired,
  showComplete: PropTypes.func.isRequired,
  showTodo: PropTypes.func.isRequired
}
