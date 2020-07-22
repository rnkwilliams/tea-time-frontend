import React from 'react';
import { connect } from 'react-redux'
import { deleteTea } from '../actions/deleteTea'
import { Link } from 'react-router-dom'

const Tea = (props) => {

  let tea = props.teas.filter(tea => tea.id === props.match.params.id)[0]
  const { history } = props

  const handleDelete = (tea, history) => {
    props.deleteTea(tea.id, history)
  }

  return (
    tea ?
      <div>
        <h2>{tea.attributes.name}</h2>
        Tea Amount: {tea.attributes.amount} tsp<br></br>
        Water Amount: {tea.attributes.water} ml<br></br>
        Water Temperature: {tea.attributes.temp} F<br></br>
        Steep Time: {tea.attributes.time} mins<br></br>
        Category: {tea.attributes.category.name}<br></br>
        Flavor Notes: {tea.attributes.notes}<br></br>
        <button onClick={() => handleDelete(tea, history)}>Delete</button>
        <Link to={`/teas/${tea.id}/edit`}> Edit Tea</Link>
      </div> :
      <p>This tea does not exist!</p>
  )
}

export default connect(null, { deleteTea })(Tea);
