import React from 'react'
import { Link } from 'react-router-dom'

const Categories = (props) => {

  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Categories</h2>
          <h3 className="section-subheading text-muted">Information for each tea type.</h3>
        </div>

        <div className="row text-center">
          {props.categories.map(category =>
            <div className="col-md-4" key={category.id}>
              <div>
                <Link to={`/categories/${category.id}`}>
                  <img src={category.attributes.img_url} alt={category.attributes.name} />
                  <h4 className="my-3">{category.attributes.name}</h4>
                </Link>
              </div>
            </div>)}
        </div>
      </div>
    </section>
  )
}

export default Categories


