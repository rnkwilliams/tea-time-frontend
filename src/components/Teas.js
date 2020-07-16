import React from 'react'
import { connect } from 'react-redux'
import { deleteTea } from '../actions/deleteTea'

const Teas = (props) => {
  //console.log(props)
  //debugger;

  const handleDelete = (tea) => {
    props.deleteTea(tea.id)
  }

  return (
    <div>
      {props.teas.map(tea =>
        <div key={tea.id}>
          <h2>{tea.attributes.name}</h2>
          Tea Amount: {tea.attributes.amount} tsp<br></br>
          Water Amount: {tea.attributes.water} ml<br></br>
          Water Temperature: {tea.attributes.temp} F<br></br>
          Steep Time: {tea.attributes.time} mins<br></br>
          Category: {tea.attributes.category.name}<br></br>
          Flavor Notes: {tea.attributes.notes}<br></br>
          <button onClick={() => handleDelete(tea)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default connect(null, { deleteTea })(Teas)
