import React from 'react'
import { connect } from 'react-redux'
import { editTea } from '../../actions/editTea'
import { deleteTea } from '../../actions/deleteTea'

class TeaEditForm extends React.Component {

  state = {
    name: '',
    time: '',
    amount: '',
    temp: '',
    water: '',
    notes: '',
    category_id: ''
  }

  componentDidMount() {
    this.setState({
      name: this.props.tea.attributes.name,
      time: this.props.tea.attributes.time,
      amount: this.props.tea.attributes.amount,
      temp: this.props.tea.attributes.temp,
      water: this.props.tea.attributes.water,
      notes: this.props.tea.attributes.notes,
      category_id: this.props.tea.attributes.category_id
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { history } = this.props
    let tea = { ...this.state, id: this.props.tea.id }
    event.preventDefault()
    this.props.editTea(tea, history)
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
    const { history, deleteTea, tea } = this.props
    const teaId = tea ? tea.id : null

    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Edit Tea</h2><br></br>
          </div>

          <div>
            <form onSubmit={this.handleSubmit}>
              {/* <h1>Edit Tea</h1> */}
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
              <input type='submit' value='Update Tea' />
            </form><br></br>
            <button onClick={() => deleteTea(teaId, history)}>Delete</button>
          </div >
        </div>
      </section>
    )
  }
}

export default connect(null, { editTea, deleteTea })(TeaEditForm);