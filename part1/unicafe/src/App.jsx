import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const promedio = (good * 1 + neutral * 0 + bad * -1) / total
  const positivas = good / total * 100

  return (
    <div>
      <h1>Déjanos tu opinión</h1>
      <button onClick={() => setGood(good + 1)}>bueno</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutro</button>
      <button onClick={() => setBad(bad + 1)}>malo</button>

      <h1>Estadísticas</h1>
      <p>bueno: {good}</p>
      <p>neutro: {neutral}</p>
      <p>malo: {bad}</p>

      <p>total:{total}</p>
      <p>promedio : {promedio}</p>
      <p>positivas={positivas}%</p>


    </div>
  )
}

export default App
