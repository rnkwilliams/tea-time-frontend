import React from 'react'
import { Redirect } from 'react-router-dom'

const Category = (props) => {

  let category = props.categories.filter(category => category.id === props.match.params.id)[0]

  return (
    <div>
      {category ? category.attributes.name : null}
      <div>
        {category ? <img src={category.attributes.img_url}
          alt={category.attributes.name} /> : null}
      </div>
      {category ? category.attributes.description : null}<br></br><br></br>

      <label>Brewing Instructions: </label>
      {category ? category.attributes.instructions : null}
    </div>
  )
}

export default Category
