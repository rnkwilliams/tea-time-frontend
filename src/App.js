import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer'
import TeasContainer from './containers/TeasContainer'
import TimerContainer from './containers/TimerContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'


class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/categories' component={CategoriesContainer} />
        <Route exact path='/teas/new' component={TeasContainer} />
        <Route exact path='/teas' component={TeasContainer} />
        <Route exact path='/timer' component={TimerContainer} />
      </div >
    );
  }
}

export default App;
