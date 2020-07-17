import React from 'react';
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
      <h1>Welcome to TeaTime</h1>
      <Link to="/teas">Explore Tea Library</Link>
    </div>
  )
}

export default Home;
