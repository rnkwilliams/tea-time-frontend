import React from 'react'
import { Link } from 'react-router-dom'

const Teas = (props) => {
  //console.log(props)
  //debugger;

  return (
    // <div>
    //   {props.teas.map(tea =>
    //     <div key={tea.id}>
    //       <Link to={`/teas/${tea.id}`}>
    //         <h2>{tea.attributes.name}</h2>
    //       </Link>
    //       {/* Tea Amount: {tea.attributes.amount} tsp<br></br>
    //       Water Amount: {tea.attributes.water} ml<br></br>
    //       Water Temperature: {tea.attributes.temp} F<br></br>
    //       Steep Time: {tea.attributes.time} mins<br></br>
    //       Category: {tea.attributes.category.name}<br></br>
    //       Flavor Notes: {tea.attributes.notes}<br></br> */}
    //     </div>)}
    // </div>

    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Your Teas</h2>
          <h3 className="section-subheading text-muted">Choose your tea for details.</h3>
        </div>
        <div className="row">

          {props.teas.map(tea =>
            <div className="col-lg-4 col-sm-6 mb-4" key={tea.id}>
              <div className="portfolio-item">
                <div className="portfolio-caption">
                  <div>
                    <Link to={`/teas/${tea.id}`}>
                      <img className="img-fluid" src="https://source.unsplash.com/FmgZ5xzDG-s/1600x900" alt="" />
                      <div className="portfolio-caption-heading">{tea.attributes.name}</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>)}

        </div>
      </div>
    </section>
  )
}

export default Teas;
