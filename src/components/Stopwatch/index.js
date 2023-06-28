// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timerMinutes: '00',
    timerSeconds: '00',
    totalSeconds: '0',
    isTimerRunning: false,
    isStarted: false,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const {totalSeconds, isTimerRunning, isStarted} = this.state

    if (isStarted && isTimerRunning) {
      const updatedTotalSecs = parseInt(totalSeconds) + 1
      const mints = Math.floor(updatedTotalSecs / 60)
      const secs = updatedTotalSecs % 60
      const updatedMints = (mints < 10 ? '0' : '') + mints
      const updatedSecs = (secs < 10 ? '0' : '') + secs
      this.setState({
        totalSeconds: updatedTotalSecs,
        timerMinutes: updatedMints,
        timerSeconds: updatedSecs,
      })
    }
  }

  onClickStart = () => {
    this.setState({
      isStarted: true,
      isTimerRunning: true,
    })
  }

  onClickStop = () => {
    this.setState({
      isStarted: false,
      isTimerRunning: false,
    })
  }

  onClickReset = () => {
    this.setState({
      timerMinutes: '00',
      timerSeconds: '00',
      totalSeconds: '0',
      isTimerRunning: false,
      isStarted: false,
    })
  }

  render() {
    const {timerMinutes, timerSeconds} = this.state
    return (
      <div className="stopwatch-bg-container">
        <div className="time-content-container">
          <h1 className="stopwatch-heading"> Stopwatch </h1>
          <div className="timer-container">
            <div className="timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-icon"
                alt="stopwatch"
              />
              <p className="timer-name"> Timer </p>
            </div>
            <h1 className="minutes-seconds">
              {timerMinutes}:{timerSeconds}
            </h1>
            <div className="buttons-container">
              <button
                className="start-button"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="reset-button"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
