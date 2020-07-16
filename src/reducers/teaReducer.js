export default function teaReducer(state = { teas: [] }, action) {

  switch (action.type) {
    case 'FETCH_TEAS':
      return { teas: action.payload }

    case 'ADD_TEA':
      return { ...state, teas: [...state.teas, action.payload] }

    case 'DELETE_TEA':
      const teas = state.teas.filter(tea => tea.id !== action.payload)
      return { ...state, teas }

    default:
      return state
  }
}