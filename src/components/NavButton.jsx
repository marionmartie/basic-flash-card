import React from 'react'
import { useActions } from '../context/ActionContext'

const NavButton = ({text}) => {
  const {onNextQuestion, onPreviousQuestion} = useActions();

  const handleOnClick = text === '< Previous' ? onPreviousQuestion : onNextQuestion;
  
  return (
    <button onClick={handleOnClick} className='hover:underline cursor-pointer'>{text}</button>
  )
}

export default NavButton