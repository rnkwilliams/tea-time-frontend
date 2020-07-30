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
    const { history } = this.props
    event.preventDefault()
    this.props.addTea(this.state, history)
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
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Add Your Favorite Tea</h2><br></br>
          </div>

          <div>
            <form onSubmit={this.handleSubmit}>
              {/* <h1>Add Your Favorite Tea</h1> */}
              <label>Tea Name: </label>
              <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br></br>
              <label>Tea Amount: </label>
              <input type='text' name='amount' value={this.state.amount} onChange={this.handleChange} /> tsp<br></br>
              <label>Water Amount: </label>
              <input type='text' name='water' value={this.state.water} onChange={this.handleChange} /> ml<br></br>
              <label>Water Temperature: </label>
              <input type='text' name='temp' value={this.state.temp} onChange={this.handleChange} /> F<br></br>
              <label>Steep Time: </label>
              <input type='text' name='time' value={this.state.time} onChange={this.handleChange} /> mins<br></br>

              <label>Choose Category: </label>
              <select value={this.state.category_id} name='category_id' onChange={this.handleChange}>
                <option value="" disabled=""></option>
                <option value="1">Black Tea</option>
                <option value="2">Green Tea</option>
                <option value="3">White Tea</option>
                <option value="4">Oolong Tea</option>
                <option value="5">Herbal Tea</option>
                <option value="6">Chai Tea</option>
              </select><br></br>

              <label>Flavor Notes: </label>
              <textarea name='notes' value={this.state.notes} onChange={this.handleChange} rows="4" cols="40" /><br></br>
              <input type='submit' value='Add Tea' />
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(null, { addTea })(TeaForm);