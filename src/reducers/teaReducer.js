export default function teaReducer(state = [], action) {

  switch (action.type) {
    case 'FETCH_TEAS':
      return action.payload

    case 'ADD_TEA':
      return state.concat(action.payload)

    case 'DELETE_TEA':
      return state.filter(tea => tea.id !== action.payload)

    case 'EDIT_TEA':
      return state.filter(tea => tea.id !== action.payload)

    default:
      return state
  }
}