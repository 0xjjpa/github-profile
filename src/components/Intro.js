import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Intro.css';

export default class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <Jumbotron>
          <h1>Github Profile</h1>
          <p>A utility to visualize profiles from Github.</p>
        </Jumbotron>
      </div>
    );
  }
}
