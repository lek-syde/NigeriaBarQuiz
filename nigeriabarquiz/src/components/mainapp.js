import React, { Component } from 'react';
import './mainapp.css';
import './style.css';
import Header from './header/header';
import QuestionBody from './questions/question'

export default class MainApp extends Component{
  state = {



    "questions": [
        {
            "id": 2,
            "question": "When was github founded ?"
        },
        {
            "id": 1,
            "question": "How are you ?"
        }
    ],
    "answers": [
        {
            "id": 1,
            "qid": 1,
            "questionOption": "notbad",
            "correct": false
        },
        {
            "id": 2,
            "qid": 1,
            "questionOption": "nah",
            "correct": false
        },
        {
            "id": 3,
            "qid": 1,
            "questionOption": "fine",
            "correct": true
        },
        {
            "id": 4,
            "qid": 2,
            "questionOption": "2006",
            "correct": false
        },
        {
            "id": 5,
            "qid": 2,
            "questionOption": "2008",
            "correct": true
        },
        {
            "id": 6,
            "qid": 2,
            "questionOption": "2007",
            "correct": false
        }
    ],
  "correctAnswer":0,
  "clickedAnswer":0,
  "step": 0,
  "score": 0

};



checkAnswer = answer =>{
    const {correctAnswers, step, score}= this.state;
    this.setState({
      clickedAnswer: answer

  });
    if(answer.correct){

      this.setState({

        score: score + 1
      });

    }else {

      if(score>0){
        this.setState({
        score: score - 1,
        clickedAnswer: answer

      });


    }

}
};

NextStep= step => {
  this.setState({
    step:step+1

  });
}


PrevStep= step =>{

  this.setState({
    step:step-1

  });
}
  render(){
    let {questions, step, answers, currentquestion, clickedAnswer, score} = this.state

    return (
<>
      <Header/>

      { step+1 <=Object.keys(questions).length ?
        (  <>
    <QuestionBody
        step= {step}
        question= {questions[step]}
        answer= {answers}
        checkAnswer= {this.checkAnswer}
        clickedAnswer= {clickedAnswer}
        PrevStep= {this.PrevStep}
        NextStep= {this.NextStep}
      />

      </>
      ):(
        <>

      <div className= "finalPage">
      <h1>you have completed the Quiz!</h1>
      <p>Your score is {score} of {Object.keys(questions).length}</p>
      <p>Thank you!</p>
      </div>
      </>
    )


    }
</>









    );
  }

}
