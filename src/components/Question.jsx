import React, {useState} from 'react'

const Question = ({currentQuestion}) => {
  
  return (
    <div className='my-2 border border-gray-400 rounded-md p-2'>
        <div className="bg-gray-200 px-4 py-20 rounded-md">
            <p className="text-4xl font-bold text-center">
                {currentQuestion.question}
            </p>
        </div>
    </div>
  )
}

export default Question