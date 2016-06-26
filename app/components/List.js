require('../stylesheets/main.less')
import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem, updateItem, toggleComplete, fetchAndHandleItems } from '../modules/items'
import { setView } from '../modules/listView'
import { makeID } from '../config/helpers'
import ListItem from './ListItem'
import Menu from './Menu'

class List extends Component {
  componentDidMount () {
    fetchAndHandleItems(this.props.dispatch)
  }
  render () {
    let {dispatch, items, listView} = this.props
    let input
    const itemIDs = Object.keys(items)
    const visibleItems = (itemIDs, view) => {
      switch (view) {
        case 'ALL':
          return itemIDs
        case 'COMPLETE':
          return itemIDs.filter(itemID => items[itemID].isComplete)
        case 'TODO':
          return itemIDs.filter(itemID => !items[itemID].isComplete)
        default:
          return itemIDs
      }
    }
    return (
      <div className='home'>
        <Menu
          showAll={() => dispatch(setView('ALL'))}
          showComplete={() => dispatch(setView('COMPLETE'))}
          showTodo={() => dispatch(setView('TODO'))}
        />
        <ul className='list'>
          {visibleItems(itemIDs, listView).map(itemID =>
            <ListItem
              key={itemID}
              itemID={itemID}
              text={items[itemID].text}
              isComplete={items[itemID].isComplete}
              onDelete={() => dispatch(removeItem(itemID))}
              onToggle={() => dispatch(toggleComplete(itemID, items[itemID].isComplete))}
              onUpdate={newVal => dispatch(updateItem(itemID, newVal))}
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
        </form>
      </div>
    )
  }
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  listView: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return {
    items: state.items,
    listView: state.listView
  }
}

export default connect(mapStateToProps)(List)
