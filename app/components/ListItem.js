import React, { PropTypes } from 'react'

export default function ListItem ({itemID, text, isComplete, onUpdate, onToggle, onDelete}) {
  const makeOpaque = isComplete ? 'completed' : ''
  const makeCheckGreen = isComplete ? 'setGreen' : ''
  let input
  return (
    <li className='card'>
      <form
        className='itemForm'
        onSubmit={e => {
          e.preventDefault()
          input.value = text
          input.blur()
        }}>
        <input
          className={makeOpaque}
          onChange={() => onUpdate(input.value)}
          value={text}
          ref={node => { input = node }}
        />
      </form>
      <div>
        <button onClick={onToggle}>
          <i className={`fa fa-check-circle-o ${makeCheckGreen}`} aria-hidden='true'></i>
        </button>
        <button onClick={onDelete}>
          <i className='fa fa-trash' aria-hidden='true'></i>
        </button>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  itemID: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
}
