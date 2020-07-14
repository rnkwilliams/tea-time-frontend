import React from 'react'

const Category = (props) => {

  return (
    <div>
      {props.category.attributes.name}
      <div>
        <img src={props.category.attributes.img_url}
          alt={props.category.attributes.name} />
      </div>
    </div>
  )
}

export default Category
