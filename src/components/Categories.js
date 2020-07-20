import React from 'react'
import { Link } from 'react-router-dom'

const Categories = (props) => {

  return (
    <div>
      {props.categories.map(category =>
        <div key={category.id}>
          <Link to={`/categories/${category.id}`}>
            <h2>{category.attributes.name}</h2>
            <div>
              <img src={category.attributes.img_url} alt={category.attributes.name} />
            </div>
          </Link>
        </div>)}
    </div >
  )
}

export default Categories


