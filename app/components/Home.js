import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem, toggleComplete } from '../modules/todo'
import { makeID } from '../config/helpers'
import ListItem from './ListItem'
import Menu from './Menu'

function Home ({ dispatch, items }) {
  let input
  const itemIDs = Object.keys(items)
  return (
    <div className='home'>
      <Menu />
      <ul className='list'>
        {itemIDs.map((itemID, idx) =>
          <ListItem
            key={idx}
            itemID={items[itemID].itemID}
            text={items[itemID].text}
            isComplete={items[itemID].isComplete}
            onDelete={() => dispatch(removeItem(itemID))}
            onToggle={() => dispatch(toggleComplete(itemID))}
          />
        )}
      </ul>
      <form className='itemForm' onSubmit={e => {
        e.preventDefault()
        dispatch(addItem(input.value, makeID()))
        input.value = ''
      }}>
        <input
          placeholder='add item'
          ref={node => { input = node }}
        />
        <button className='btn btn-info' type='submit'>
          {'Add Item'}
        </button>
      </form>
    </div>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  console.log(state)
  return {
    items: state
  }
}
export default connect(mapStateToProps)(Home)
