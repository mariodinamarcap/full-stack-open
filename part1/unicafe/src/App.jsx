import { useState } from 'react'

const StatisticLine = (props) => {
  return <tr>
    <td>{props.texto}:</td>
    <td> {props.valor}</td></tr>
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const promedio = (good * 1 + neutral * 0 + bad * -1) / total
  const positivas = good / total * 100


  if (total === 0) {
    return <p>No hay opiniones todavía</p>
  }

  return (
    <>
      <h1>Estadísticas</h1>
      <table>
        <tbody>
          <StatisticLine texto="bueno" valor={good} />
          <StatisticLine texto="neutro" valor={neutral} />
          <StatisticLine texto="malo" valor={bad} />

          <StatisticLine texto="total" valor={total} />
          <StatisticLine texto="promedio" valor={promedio} />
          <StatisticLine texto="positivas" valor={positivas + "%"} />
        </tbody>
      </table>
    </>
  )
}

const Button = (props) => {
  return (<button onClick={props.funcion}>{props.texto}</button>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Déjanos tu opinión</h1>
      <Button funcion={() => setGood(good + 1)} texto="bueno" />
      <Button funcion={() => setNeutral(neutral + 1)} texto="neutral" />
      <Button funcion={() => setBad(bad + 1)} texto="malo" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
