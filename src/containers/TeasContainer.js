import React from 'react'
import { connect } from 'react-redux'
import { fetchTeas } from '../actions/fetchTeas'
import { Route, Switch } from 'react-router-dom'
import TeaForm from '../components/TeaForm'
import Teas from '../components/Teas'


class TeasContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTeas()
  }

  render() {
    return (

      <div>
        <Route path='/teas/new' component={TeaForm} />
        <Teas teas={this.props.teas} />
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    teas: state.teas
  }
}

export default connect(mapStateToProps, { fetchTeas })(TeasContainer);
