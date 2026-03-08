import React from 'react'

const ShowAnswer = ({handleClick, isAnswerShown}) => {
  return (
    <button className='cursor-pointer hover:underline active:text-blue-700' onClick={handleClick}>
      {isAnswerShown ? 'Show Answer' : 'Show Question'}
    </button>
  )
}

export default ShowAnswer