import React from 'react'
import ProgressBar from './components/ProgressBar'
import Question from './components/Question'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
      <div className='max-w-5xl mx-auto my-12'>
        <ProgressBar />
        <Question />
        <Navigation />
      </div>
    </>
  )
}

export default App