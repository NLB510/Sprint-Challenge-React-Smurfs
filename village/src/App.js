import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import styled from "styled-components";

import "./App.css";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  postSmurf = smurf => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
      
  };

  deleteSmurf = (e, smurfId) => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <NavBar />

        <div className="link-container">
          <Link to="/smurf-form" className="app-link">
            Add A Smurf
          </Link>
          <Link to="/" className="app-link">
            Smurf List
          </Link>
        </div>

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} postSmurf={this.postSmurf} />}
        />
      </div>
    );
  }
}

export default App;
