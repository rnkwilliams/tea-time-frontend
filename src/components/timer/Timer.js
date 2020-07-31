import React from 'react'

class Timer extends React.Component {

  state = {
    timerSecond: 0,
    intervalId: 0
  }

  startTimer = () => {
    let intervalId = setInterval(this.decreaseTimer, 1000)
    this.props.onPlayStopTimer(true);
    this.setState({
      intervalId: intervalId
    })
  }

  decreaseTimer = () => {
    switch (this.state.timerSecond) {
      case 0:
        this.props.decreaseTimerMinute()
        this.setState({
          timerSecond: 59
        })
        break;
      default:
        this.setState(prevState => {
          return {
            timerSecond: prevState.timerSecond - 1
          }
        })
        break;
    }
  }

  stopTimer = () => {
    clearInterval(this.state.intervalId)
    this.props.onPlayStopTimer(false);
  }

  resetTimer = () => {
    this.stopTimer();
    this.props.resetTimer();
    this.props.onPlayStopTimer(false);
    this.setState({
      timerSecond: 0
    })
  }

  render() {

    return (
      <div>
        <div className="timer-container">
          <h4>Timer</h4>
          <span>{this.props.timerMinute}</span>
          <span>:</span>
          <span>{this.state.timerSecond === 0
            ? '00'
            : this.state.timerSecond < 10
              ? '0' + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </div>

        <div className="timer-controls">
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Timer;