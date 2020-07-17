import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer'
import TeasContainer from './containers/TeasContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'



class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={Home} />
        <TeasContainer />
        <CategoriesContainer />
      </div >
    );
  }

}

export default connect()(App);
