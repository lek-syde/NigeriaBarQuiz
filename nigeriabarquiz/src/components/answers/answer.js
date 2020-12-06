import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './answer.css'

function questionOptionBody(props) {

  let asnwer =props.questionoptions
              .map((qAnswer, i) => {

                if(qAnswer.qid === props.questionid){
                  
                  return (
                    <li
                    className=
                    {
                      props.clickedAnswer ===qAnswer ?
                      'clickedAns' : ''
                    }
                    key={qAnswer.id}
                    onClick={()=> props.checkAnswer(qAnswer)}
                    >
                     {qAnswer.questionOption}
                    </li>
                  );



                }else{

                  <h1>Hi</h1>
                }




          });
  return (
<>
    <ul className="Answers">

    {asnwer}

    </ul>

</>
  );

}

export default questionOptionBody;
