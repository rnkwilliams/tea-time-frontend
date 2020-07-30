import React from 'react'

const Category = (props) => {

  let category = props.categories.filter(category => category.id === props.match.params.id)[0]

  return (
    category ?
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">{category.attributes.name}</h2>
          </div>

          <div>
            <div>
              {<img src={category.attributes.img_url} alt={category.attributes.name} />}
            </div>
            {category.attributes.description}<br></br><br></br>

            <label>Brewing Instructions: </label>
            {category.attributes.instructions}
          </div>
        </div>
      </section> :
      <p>This category does not exist!</p>
  )
}

export default Category
