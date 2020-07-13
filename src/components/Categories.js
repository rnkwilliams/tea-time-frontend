import React from 'react'

const Categories = (props) => {

  return (
    <div>
      {props.categories.map(category =>
        <div key={category.id}>{category.attributes.name}
          <div>
            <img src={category.attributes.img_url}
              alt={category.attributes.name} />
          </div>
        </div>)
      }
    </div >
  )
}

export default Categories