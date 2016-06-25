const SET_VIEW = 'SET_VIEW'

export function setView (view) {
  return {
    type: SET_VIEW,
    view
  }
}

const listView = (state = 'ALL', action) => {
  console.log(action.view)
  switch (action.type) {
    case SET_VIEW:
      return action.view
    default:
      return state
  }
}

export default listView
