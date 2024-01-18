import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter<=19){
    setCounter(counter+1)
  }
}

  const removeValue = () => {
    if(counter>=1){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Hello React </h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
      Add Value
      </button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
