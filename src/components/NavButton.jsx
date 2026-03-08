import React from 'react'
import { useActions } from '../context/ActionContext'

function Direction({text}) {
  const {onNextQuestion, onPreviousQuestion} = useActions();

  if(text == '< Previous') {
    return <button onClick={() => onPreviousQuestion()} className='hover:underline cursor-pointer'>{text}</button>
  }
  return <button onClick={() => onNextQuestion()} className='hover:underline cursor-pointer'>{text}</button>
}

const NavButton = ({text}) => {
  const {onNextQuestion, onPreviousQuestion} = useActions();

  const handleOnClick = text === '< Previous' ? onPreviousQuestion : onNextQuestion;
  
  return (
    <button onClick={handleOnClick} className='hover:underline cursor-pointer'>{text}</button>
  )
}

export default NavButton