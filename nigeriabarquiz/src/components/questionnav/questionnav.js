import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './questionnav.css'

function questionNav(props) {
  return (
    <div class="container">
        <div class="row">
          <div class="col"><button type="button"
            onClick={()=> props.PrevStep(props.step)}
           class="btn btn-secondary btn-lg btn-block">Previous</button></div>
          <div class="w-40"></div>
          <div class="col"><button type="button"
          onClick={()=> props.NextStep(props.step)}
          class="btn btn-secondary btn-lg btn-block">Next</button></div>
        </div>
      </div>

  );

}

export default questionNav;
