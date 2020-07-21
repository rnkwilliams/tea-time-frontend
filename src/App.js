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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/categories' component={CategoriesContainer} />
          <Route path='/teas' component={TeasContainer} />
          <Route exact path='/timer' component={TimerContainer} />
        </Switch>
      </div >
    );
  }
}

export default App;
