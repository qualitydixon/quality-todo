const ALL = 'ALL'
const listView = (state = ALL, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return action.filter
    default:
      return state
  }
}

export default listView
