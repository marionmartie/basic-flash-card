import React from 'react'
import NavButton from './NavButton'
import ShowAnswer from './ShowAnswer'

const Navigation = ({handleShowAnswer, showAnswer}) => {
  return (
    <div className="flex justify-between border py-2 px-4 rounded-md border-gray-400">
        <NavButton text="< Previous" />

        <ShowAnswer handleClick={handleShowAnswer} isAnswerShown={showAnswer} />

        <NavButton text="Next >" />
    </div>
  )
}

export default Navigation