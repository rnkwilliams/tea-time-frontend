import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to TeaTime</h1>
      <Link to="/categories">Explore Tea Library</Link> */}

      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To TeaTime!</div>
          <div className="masthead-heading text-uppercase">A Home For Your Teas</div>
          <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="/categories">Explore Tea Library</Link>
        </div>
      </header>
    </div>
  )
}

export default Home;
