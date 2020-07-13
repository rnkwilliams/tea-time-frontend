export default function teaReducer(state = { teas: [] }, action) {

  switch (action.type) {
    case 'FETCH_TEAS':
      return { teas: action.payload }

    default:
      return state
  }
}