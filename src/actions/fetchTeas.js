export function fetchTeas() {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/teas')
      .then(resp => resp.json())
      .then(teas => dispatch({
        type: 'FETCH_TEAS',
        payload: teas
      }))
  }
}
