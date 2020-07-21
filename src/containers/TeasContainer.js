import React from 'react'
import { connect } from 'react-redux'
import { fetchTeas } from '../actions/fetchTeas'
import { Route, Switch } from 'react-router-dom'
import TeaForm from '../components/TeaForm'
import Tea from '../components/Tea'
import Teas from '../components/Teas'


class TeasContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTeas()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/teas/new' component={TeaForm} />
          <Route path='/teas/:id' render={(routerProps) => <Tea {...routerProps} teas={this.props.teas} />} />
          <Route exact path='/teas' render={(routerProps) => <Teas {...routerProps} teas={this.props.teas} />} />
        </Switch>
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
