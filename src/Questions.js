import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Home from './Home';
//import { Routes, Route } from 'react-router-dom';

export default function Questions() {

  const navigate = useNavigate();
  const [click, setClick] = useState(true);
  const [currentQuestion, setQuestion] = useState(0);
  let [end, setEnd] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  const navigateHome = () => {
    navigate('/Home');
  };

  const prevPage = () => {
    setQuestion(currentQuestion - 1)
  }

  const nextPage = () => {
    setQuestion(currentQuestion + 1)
    if (questions[currentQuestion].id === 9) {
      setEnd(!end);
    }
  }

  const Continue = e => {
    e.preventDefault();
    nextPage();
  }

  const Previous = e => {
    e.preventDefault();
    prevPage();
  }

  const questions =
    [
      {
        id: 1,
        questionText: 'What is your monthly income',
        answer: <><input type="text" color='red' />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={Continue}>Next</button></>
      },
      {
        id: 2,
        questionText: 'How much $ do you have in your checking?',
        answer: <><input type="text" color='red' />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={Continue}>Next</button></>
      },
      {
        id: 3,
        questionText: 'How much do you currently have in your savings?',
        answer: <><input type="text" color='red' />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={Continue}>Next</button></>
      },
      {
        id: 4,
        questionText: 'How much do you currently have in your Retirement',
        answer: <><input type="text" color='red' />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={Continue}>Next</button></>
      },
      {
        id: 5,
        questionText: 'What other assets do you own?',
        answer: <><input type="text" color='red' />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={Continue}>Next</button></>
      },
      {
        id: 6,
        questionText: 'What is the estimated value of your assets',
        answer: <><input type="text" color='red' />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={Continue}>Next</button></>
      },
      {
        id: 7,
        questionText: 'How much are your monthly expenses?',
        answer: <><input type="text" color='red' />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={Continue}>Next</button></>
      },
      {
        id: 8,
        questionText: 'Any other debts?',
        answer: <><input type="text" color='red' />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={Continue}>Next</button></>
      },
      {
        id: 9,
        questionText: 'What are you financial goals?',
        answer: <><input type="text" />
          <br />
          <br />
          <button onClick={Previous}>Back</button>
          <br />
          <br />
          <button onClick={navigateHome}>Dashboard</button></>
      }
    ];

  return (
    <div className='app'>
      {click ? (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Thank you for signing up! Lets Dig In!</span>
            </div>
            <br />
            <br />
            <button onClick={(e) => { handleClick(e) }}>Let's get started</button>
          </div><div className='answer-section'>
          </div>
        </>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span> Thank you for signing up! <br /> <br /></span>
              <span> Lets Dig In!</span>
            </div>
            <div className='question-text'>
              <div>
                {questions[currentQuestion].questionText}
                <br />
                <br />
                {questions[currentQuestion].answer}
                {console.log(questions[currentQuestion].id)}
              </div>
            </div>
            <br />
          </div>
        </>
      )}
      <>
      </>
    </div>
  );
}
