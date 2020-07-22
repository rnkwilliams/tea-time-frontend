export const editTea = (data, history) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/teas/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(tea => dispatch({ type: 'EDIT_TEA', payload: tea }))
  }

}