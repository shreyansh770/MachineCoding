import { useState } from 'react'
import './App.css'
import data from "../data.json"

function App() {
  const [info, setData] = useState(data)
  const [ques , setQues] = useState(0)
  const [score , setScore] = useState(0)

  const handleOptions = (e)=>{

     if(e.target.innerHTML == info[ques].correctanswer){
        setScore(score+1)
        if(ques<info.length-1){
          setQues(ques+1)
        }else{
          alert(`well done your score is ${score}`)
        }
     }else{
      if(ques<info.length-1){
        setQues(ques+1)
      }
     }
  }

  return (
    <>
      <div className="container h-screen w-screen flex justify-center items-center flex-col">

        <div className="questions h-20 w-3/4 border-2 flex justify-center items-center flex-col">

          <h1>{info[ques].question}</h1>

        </div>
        <div className="options h-40 w-3/4 flex justify-center items-center flex-col ">
          <div className="upper-two-options  w-full h-2/4 flex justify-between items-center">
            <h4 className="text-lg hover:cursor-pointer" onClick={handleOptions}>{info[ques].options[0]}</h4>
            <h4 className="text-lg hover:cursor-pointer" onClick={handleOptions}>{info[ques].options[1]}</h4>
          </div>
          <div className="lower-two-options w-full h-2/4 flex justify-between items-center">
            <h4 className="text-lg hover:cursor-pointer" onClick={handleOptions}>{info[ques].options[2]}</h4>
            <h4 className="text-lg hover:cursor-pointer" onClick={handleOptions}>{info[ques].options[3]}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
