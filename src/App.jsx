import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="main_heading">
              Main Heading
            </h1>
          </div>
          <div className="col-md-6">
            <h2 className="sub_heading">
              Sub Heading
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
