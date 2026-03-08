import React from 'react'

const ShowAnswer = ({handleClick, isAnswerShown}) => {
  return (
    <button onClick={handleClick}>
      {isAnswerShown ? 'Show Answer' : 'Show Question'}
    </button>
  )
}

export default ShowAnswer