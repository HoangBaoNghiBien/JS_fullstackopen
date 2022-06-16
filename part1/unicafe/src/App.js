import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  // Handle Click
  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App

//
// ---------- COMPONENTS ----------
//

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  // If the feedback has been gathered
  if (props.all !== 0)
    return (
      <table>
        <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={(props.good - props.bad)/props.all} />
        <StatisticLine text="positive" value={(props.good/props.all)*100} />
        </tbody>
      </table>
    )

  // If no feedback is submitted
  else 
    return (
      <div>
        <p>No feedback given</p> 
      </div>
    )
}

const StatisticLine = (props) => {
  // If "positive" is displayed, add % at the end
  if (props.text === "positive")
    return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value} %</td>
      </tr>
    )
  else
    return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr>
    )
}
