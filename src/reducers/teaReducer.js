export default function teaReducer(state = { teas: [] }, action) {

  switch (action.type) {
    case 'FETCH_TEAS':
      return { teas: action.payload }

    case 'ADD_TEA':
      return { ...state, teas: [...state.teas, action.payload] }

    default:
      return state
  }
}