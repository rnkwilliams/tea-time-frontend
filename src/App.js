import React from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/fetchCategories'

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div >
    );
  }

}

export default connect(null, { fetchCategories })(App);
