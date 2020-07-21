import React from 'react';
import { connect } from 'react-redux'
import { deleteTea } from '../actions/deleteTea'

const Tea = (props) => {
  console.log(props)
  // debugger;

  let tea = props.teas.filter(tea => tea.id === props.match.params.id)[0]
  const { history } = props

  //console.log(tea)

  const handleDelete = (tea, history) => {
    props.deleteTea(tea.id, history)
  }

  return (
    <div>
      <h2>{tea ? tea.attributes.name : null}</h2>
      Tea Amount: {tea ? tea.attributes.amount : null} tsp<br></br>
      Water Amount: {tea ? tea.attributes.water : null} ml<br></br>
      Water Temperature: {tea ? tea.attributes.temp : null} F<br></br>
      Steep Time: {tea ? tea.attributes.time : null} mins<br></br>
      Category: {tea ? tea.attributes.category.name : null}<br></br>
      Flavor Notes: {tea ? tea.attributes.notes : null}<br></br>
      <button onClick={() => handleDelete(tea, history)}>Delete</button>
      {/* <button onClick={() => handleDelete(tea)}>Edit</button> */}
    </div>
  )
}

export default connect(null, { deleteTea })(Tea);
