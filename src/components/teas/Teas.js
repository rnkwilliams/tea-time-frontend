import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

const Teas = (props) => {

  return (
    <section className="page-section bg-light" id="portfolio" >
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
                    {/* <Rating tea={tea} key={tea.id} /> */}
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
