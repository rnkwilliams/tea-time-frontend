import React from 'react';

const TimerLength = (props) => {

  const decreaseCounter = () => {
    if (props.timerLength > 1) {
      return props.decreaseTime();
    }
  }

  const increaseCounter = () => {
    if (props.timerLength < 60) {
      return props.increaseTime();
    }
  }

  return (
    <div className='interval-container'>
      <button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={() => decreaseCounter()}>
        -
      </button>
      <p>{props.timerLength}</p>
      <button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={() => increaseCounter()}>
        +
        </button>
    </div>
  )
}

export default TimerLength;
