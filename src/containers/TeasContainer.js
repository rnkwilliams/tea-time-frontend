import React from 'react'
import { connect } from 'react-redux'
import { fetchTeas } from '../actions/fetchTeas'
import { Route, Switch } from 'react-router-dom'
import TeaForm from '../components/forms/TeaForm'
import TeaEditForm from '../components/forms/TeaEditForm'
import Tea from '../components/teas/Tea'
import Teas from '../components/teas/Teas'


class TeasContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTeas()
  }

  render() {
    const { teas } = this.props

    return (
      <div>
        <Switch>
          <Route path='/teas/new' component={TeaForm} />
          <Route path='/teas/:id/edit' render={(props) => {
            const tea = teas.filter(tea => tea.id === props.match.params.id)[0]
            return <TeaEditForm {...props} tea={tea} />
          }} />

          <Route path='/teas/:id' render={(props) => {
            const tea = teas.filter(tea => tea.id === props.match.params.id)[0]
            return <Tea {...props} tea={tea} />
          }} />
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
