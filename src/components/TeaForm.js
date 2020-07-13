import React from 'react'
import { connect } from 'react-redux'
import { addTea } from '../actions/addTea'


class TeaForm extends React.Component {

  state = {
    name: '',
    time: '',
    amount: '',
    temp: '',
    water: '',
    notes: '',
    category_id: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTea(this.state)
    this.setState({
      name: '',
      time: '',
      amount: '',
      temp: '',
      water: '',
      notes: '',
      category_id: ''
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Tea Name: </label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br></br>
          <label>Tea Amount: </label>
          <input type='text' name='amount' value={this.state.amount} onChange={this.handleChange} /> tsp<br></br>
          <label>Water Amount: </label>
          <input type='text' name='water' value={this.state.water} onChange={this.handleChange} /> ml<br></br>
          <label>Water Temperature: </label>
          <input type='text' name='temp' value={this.state.temp} onChange={this.handleChange} /> F<br></br>
          <label>Time: </label>
          <input type='text' name='time' value={this.state.time} onChange={this.handleChange} /> mins<br></br>

          <label>Choose the category of your tea: </label>
          <select value={this.state.category_id} name='category_id' onChange={this.handleChange}>
            <option value="1">Black Tea</option>
            <option value="2">Green Tea</option>
            <option value="3">White Tea</option>
            <option value="4">Oolong Tea</option>
            <option value="5">Herbal Tea</option>
            <option value="6">Chai Tea</option>
          </select><br></br>

          <label>Flavor Notes: </label>
          <textarea name='notes' value={this.state.notes} onChange={this.handleChange} /><br></br>
          <input type='submit' value='Add Tea' />
        </form>
      </div>
    )
  }
}

export default connect(null, { addTea })(TeaForm);