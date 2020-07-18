import React from 'react';
import { Route, Switch } from 'react-router-dom'
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
        <TeasContainer />
        <CategoriesContainer /><br></br><br></br>
        <Route exact path='/:timer' component={TimerContainer} />
      </div >
    );
  }
}

export default App;
