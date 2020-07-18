import React from 'react';
import { Route } from 'react-router-dom'
import Timer from '../components/Timer'
import TimerLength from '../components/TimerLength'


class TimerContainer extends React.Component {

  state = {
    timerLength: 5,
    timerMinute: 5,
    isPlay: false
  }

  onIncreaseTimerLength = () => {
    this.setState(prevState => {
      return {
        timerLength: prevState.timerLength + 1,
        timerMinute: prevState.timerLength + 1
      }
    })
  }

  onDecreaseTimerLength = () => {
    this.setState(prevState => {
      return {
        timerLength: prevState.timerLength - 1,
        timerMinute: prevState.timerLength - 1
      }
    })
  }

  decreaseTimerMinute = () => {
    this.setState(prevState => {
      return {
        timerMinute: prevState.timerLength - 1
      }
    })
  }

  resetTimer = () => {
    this.setState({
      timerMinute: this.state.timerLength
    })
  }

  onPlayStopTimer = (isPlay) => {
    this.setState({
      isPlay: isPlay
    })
  }

  render() {
    return (
      <div>
        <TimerLength
          timerLength={this.state.timerLength}
          isPlay={this.state.isPlay}
          increaseTime={this.onIncreaseTimerLength}
          decreaseTime={this.onDecreaseTimerLength}
        /><br></br><br></br>
        <Timer
          timerMinute={this.state.timerMinute}
          decreaseTimerMinute={this.decreaseTimerMinute}
          resetTimer={this.resetTimer}
          onPlayStopTimer={this.onPlayStopTimer}
        />
      </div >
    );
  }
}

export default TimerContainer;

