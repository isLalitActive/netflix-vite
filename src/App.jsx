import { useState } from 'react'
import './App.css'
import { Body } from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl font-bold text-green-500'>Hello Lalit</div>
      <Body/>
    </>
  )
}

export default App
