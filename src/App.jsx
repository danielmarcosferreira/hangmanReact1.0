import { useState } from 'react'
import './App.css'
import Main from './components/main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Main />

      <Footer/>
    </div>
  )
}

export default App
