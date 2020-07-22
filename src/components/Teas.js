import React from 'react'
import { Link } from 'react-router-dom'

const Teas = (props) => {
  //console.log(props)
  //debugger;

  return (
    <div>
      {props.teas.map(tea =>
        <div key={tea.id}>
          <Link to={`/teas/${tea.id}`}>
            <h2>{tea.attributes.name}</h2>
          </Link>
          {/* Tea Amount: {tea.attributes.amount} tsp<br></br>
          Water Amount: {tea.attributes.water} ml<br></br>
          Water Temperature: {tea.attributes.temp} F<br></br>
          Steep Time: {tea.attributes.time} mins<br></br>
          Category: {tea.attributes.category.name}<br></br>
          Flavor Notes: {tea.attributes.notes}<br></br> */}
        </div>
      )}
    </div>
  )
}

export default Teas;
