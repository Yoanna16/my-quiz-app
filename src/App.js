import React, { useState } from 'react';

function App() {

  const questions = [
    {
      questionText: 'In what year was the first iPhone released?', 
      answerOptions: [
        { answerText: '2007', isCorrect: true },
        { answerText: '2009', isCorrect: false },
        { answerText: '2010', isCorrect: false },
        { answerText: '2008', isCorrect: false }
      ]
    }, 
    {
      questionText: 'Who directed Pulp Fiction?', 
      answerOptions: [
        { answerText: 'Christopher Nolan', isCorrect: false },
        { answerText: 'Quentin Tarantino', isCorrect: true },
        { answerText: 'Martin Scorsese', isCorrect: false },
        { answerText: 'Steven Spielberg', isCorrect: false }
      ]
    },
    {
      questionText: 'How many actors have played the role of James Bond?', 
      answerOptions: [
        { answerText: 'Nine', isCorrect: true },
        { answerText: 'Ten', isCorrect: false },
        { answerText: 'Eight', isCorrect: false },
        { answerText: '11', isCorrect: false }
      ]
    },
    {
      questionText: 'The tallest building in the world is located in which city?', 
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Los Angeles', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Dubai', isCorrect: true }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [ showScore, setShowScore ] = useState(false); 
  const [score, setScore] = useState(0); 

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); 
    }

    const nextQuestion = currentQuestion + 1; 
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); 
    }
  };

  return (
    <div className='app'>
    {showScore ? (
      <div className='score-section'>
        { score === questions.length ? <div className="congrats">Congrats!</div> : <div className="congrats">Not enough! Try again</div>}
       <div className="result"> You scored {score} out of {questions.length} </div>
      </div>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
      </>
    )}
  </div>
  )

}

export default App;
