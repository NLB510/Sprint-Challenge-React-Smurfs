import React from 'react';
import styled from "styled-components"
import {Button} from "reactstrap"

const Smurf = props => {
  return (
    <SmurfDiv>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <ButtonContainer>
        <Button color="secondary" size="sm" onClick={e => props.populateForm(e, props.id)}>Edit</Button>
        <Button color="danger" size="sm" onClick={(e) => props.deleteSmurf(e, props.id)}>Delete</Button>
      </ButtonContainer>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};



/* 
=== Smurf Component Styles
*/

const SmurfDiv = styled.div`
  border: 1px solid lightgrey;
  width: 20%;
  padding: 2% 1%;
  margin: 2% auto;

  border-radius: 5px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`



export default Smurf;

