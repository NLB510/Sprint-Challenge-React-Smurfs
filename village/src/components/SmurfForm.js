import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components"

const SmurfForm = props => {
  const handleSubmit = e => {
    e.preventDefault();

    props.isUpdating ? props.updateSmurf() : props.postSmurf()
  }


    return (
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input
            onChange={props.handleInputChange}
            placeholder="name"
            value={props.smurf.name}
            name="name"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="age"
            value={props.smurf.age}
            name="age"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="height"
            value={props.smurf.height}
            name="height"
          />
          <button type="submit">{props.isUpdating ? 'Update Village' : 'Add to the Village'}</button>
        </form>
      </FormContainer>
    );
  
}


/* 
==== Form Component Styles
*/


const FormContainer = styled.div`
  margin: 2% auto;
  width: 50%;

`





export default SmurfForm;
