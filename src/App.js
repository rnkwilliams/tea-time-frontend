import React from 'react';
import { connect } from 'react-redux'
import CategoriesContainer from './containers/CategoriesContainer'
import TeasContainer from './containers/TeasContainer'


class App extends React.Component {

  render() {
    return (
      <div>
        <TeasContainer /><br></br>
        <CategoriesContainer />
      </div >
    );
  }

}

export default connect()(App);
