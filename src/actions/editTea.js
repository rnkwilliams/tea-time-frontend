export const editTea = (data, history) => {
  //debugger;
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
      .then(tea => dispatch({ type: 'EDIT_TEA', payload: tea.data }))
    history.push(`/teas/${data.id}`)
  }
}

export const setFormDataForEdit = tea => {
  //debugger;
  const teaFormData = {
    name: tea.attributes.name,
    time: tea.attributes.time,
    amount: tea.attributes.amount,
    temp: tea.attributes.temp,
    water: tea.attributes.water,
    notes: tea.attributes.notes,
    category_id: tea.attributes.category_id
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    teaFormData
  }
}