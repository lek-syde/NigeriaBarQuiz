import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import QuestionOptionBody from '../answers/answer'
import QuestionNav from '../questionnav/questionnav'
import './question.css'

function questionBody(props) {
  return (
  <Container className="pb-5">
    <Row className="row">
    <div className="card-body">


      <div className="card shadow" id="question">

          <h2>{props.step+1}. {props.question.question}</h2>

          <QuestionOptionBody
          questionoptions= {props.answer}
          questionid={props.question.id}
          checkAnswer= {props.checkAnswer}
          clickedAnswer= {props.clickedAnswer}

          />

          <QuestionNav
          step= {props.step}
          PrevStep= {props.PrevStep}
          NextStep= {props.NextStep}
          />






      </div>
    </div>
    </Row>
  </Container>
  );

}

export default questionBody;
