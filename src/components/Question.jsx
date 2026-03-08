import React, {useState} from 'react'

const ToggleAnswer = ({showAnswer, currentQuestion}) => {
  if (showAnswer) {
   return <span>{currentQuestion.answer}</span>
  } else {
   return <span>{currentQuestion.question}</span>
  }
}

const Question = ({showAnswer, currentQuestion}) => {
  
  return (
    <div className='my-2 border border-gray-400 rounded-md p-2'>
        <div className="bg-gray-200 px-4 py-20 rounded-md">
            <p className="text-4xl font-bold text-center">
                <ToggleAnswer showAnswer={showAnswer} currentQuestion={currentQuestion} />
            </p>
        </div>
    </div>
  )
}

export default Question