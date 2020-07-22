import React from 'react'
import { Redirect } from 'react-router-dom'

const Category = (props) => {

  let category = props.categories.filter(category => category.id === props.match.params.id)[0]

  return (
    category ?
      <div>
        {category.attributes.name}
        <div>
          {<img src={category.attributes.img_url}
            alt={category.attributes.name} />}
        </div>
        {category.attributes.description}<br></br><br></br>

        <label>Brewing Instructions: </label>
        {category.attributes.instructions}
      </div> :
      <p>This category does not exist!</p>
  )
}

export default Category
