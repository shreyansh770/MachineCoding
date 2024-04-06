import React from 'react'
import { config } from '../config'
import { useState } from 'react'
import "../App.css"

const Progress = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false)
  const [progressWidth , setProgressWidth] = useState(0)
  const [widthStart , setwidthStart] = useState(100/(config.length*2))
  const [widthEnd , setwidthEnd] = useState(0)


  const handleNext = () => {

    if (currentStep == config.length - 1) {
      setIsCompleted(true)
      
    } else {
      setCurrentStep(currentStep + 1);
      let newEnd = widthEnd + (100/(config.length))
      setwidthEnd(newEnd)
    }
  }
  return (
    <>
      {

        

        <div className="container">
        <div className="progress-bar" style={{ width: `${widthEnd}%`,left:`${widthStart}%` }}></div>

          <div className="progress-step">
            {config.map((step, idx) => {
              return (
                <>
                  <div className="progress" style={{width: `${100/config.length}%`}} key={idx}>
                    <span style={{ color: ((idx < currentStep || isCompleted) ? "darkgreen" : "") }}>{idx + 1}</span>
                    <h4 style={{ color: ((idx < currentStep || isCompleted) ? "darkgreen" : "") }}>{step.title}</h4>
                  </div>
                </>
              );
            })
            }
          </div>
          <div className="progress-desc">
            <span style={{ fontSize: "3rem" }}>
              {config[currentStep]?.description}
            </span>
          </div>

          <button style={{ display : (currentStep == config.length - 1 ? "none":"block")}}onClick={handleNext}>{isCompleted ? "" : "Next"}</button>
        </div>
      }
    </>
  )
}

export default Progress