import React, {useState} from 'react'
import ProgressBar from './components/ProgressBar'
import Question from './components/Question'
import Navigation from './components/Navigation'
import questions from './question.json'
import { ActionContext } from './context/ActionContext'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  let shuffleQuestionIds = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

  const [shuffledIds] = useState(() => shuffleQuestionIds(questions.map(q => q.id)))

  const currentQuestion = questions.find(q => q.id === shuffledIds[currentIndex])

  const showAnswer = () => {
    setIsAnswerShown(state => state = !state)
  }

  const actions = {
    onNextQuestion: () => currentIndex < shuffledIds.length - 1 ? setCurrentIndex(currentIndex + 1) : '',
    onPreviousQuestion: () => currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : console.log(currentIndex),
  }

  return (
    <>
      <div className='max-w-5xl mx-auto my-12 p-4'>
        <ProgressBar />
        <Question currentQuestion={currentQuestion} showAnswer={isAnswerShown} />
        <ActionContext.Provider value={actions}>
          <Navigation handleShowAnswer={showAnswer} showAnswer={isAnswerShown} />
        </ActionContext.Provider>
      </div>
    </>
  )
}

export default App