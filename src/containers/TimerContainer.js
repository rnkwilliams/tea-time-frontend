import React from 'react';
import Timer from '../components/timer/Timer'
import TimerLength from '../components/timer/TimerLength'


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
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Tea Timer</h2>
            <h3 className="section-subheading text-muted">Use timer to brew your tea.</h3>
          </div>

          <div>
            <TimerLength
              timerLength={this.state.timerLength}
              isPlay={this.state.isPlay}
              increaseTime={this.onIncreaseTimerLength}
              decreaseTime={this.onDecreaseTimerLength}
            />
            <Timer
              timerMinute={this.state.timerMinute}
              decreaseTimerMinute={this.decreaseTimerMinute}
              resetTimer={this.resetTimer}
              onPlayStopTimer={this.onPlayStopTimer}
            />
          </div >

        </div>
      </section>
    );
  }
}

export default TimerContainer;

