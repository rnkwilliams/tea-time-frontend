import React from 'react';
import { Link } from 'react-router-dom'

const Tea = ({ tea }) => {
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
        <Link to={`/teas/${tea.id}/edit`}> Edit Tea</Link>
      </div> :
      <p>This tea does not exist!</p>
  )
}

export default Tea;
