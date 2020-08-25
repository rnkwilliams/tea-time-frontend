import React from 'react'

class Rating extends React.Component {

  state = {
    rating: 0
  }

  increase = () => {
    this.setState({
      rating: this.state.rating + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increase} >Rating:</button>
        {this.state.rating}
      </div>
    )
  }
}

export default Rating;
