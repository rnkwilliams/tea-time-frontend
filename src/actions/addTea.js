
export const addTea = (data, history) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/teas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(tea => {
        if (tea.error) {
          alert('Please complete all fields!')
        } else {
          dispatch({ type: 'ADD_TEA', payload: tea.data })
          history.push(`/teas`)
        }
      })
  }
}