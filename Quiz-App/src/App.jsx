import { useState } from 'react'
import './App.css'
import data from "../data.json"

function App() {
  const [info, setData] = useState(data)

  return (
    <>
      <div className="container h-screen w-screen flex justify-center items-center flex-col">

        <div className="questions h-20 w-3/4 border-2 flex justify-center items-center flex-col">

          <h1>{info[0].question}</h1>

        </div>
        <div className="options h-40 w-3/4 flex justify-center items-center flex-col ">
          <div className="upper-two-options  w-full h-2/4 flex justify-between items-center">
            <h4 className="text-lg">{info[0].options[0]}</h4>
            <h4 className="text-lg">{info[0].options[1]}</h4>
          </div>
          <div className="lower-two-options w-full h-2/4 flex justify-between items-center">
            <h4 className="text-lg">{info[0].options[2]}</h4>
            <h4 className="text-lg">{info[0].options[3]}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
