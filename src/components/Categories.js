import React from 'react'
import { Route, Link } from 'react-router-dom'
import Category from './Category'

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


