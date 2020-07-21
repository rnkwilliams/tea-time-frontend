export const deleteTea = (teaId, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/teas/${teaId}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(tea => dispatch({ type: 'DELETE_TEA', payload: teaId }))
    history.push(`/teas`)
  }
}
