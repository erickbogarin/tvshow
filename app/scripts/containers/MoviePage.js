import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class MoviePage extends Component {
  render() {
    return (
      <div className="container">        
        <h2>Movie Page - {this.props.params.id}</h2>        
        <button onClick={browserHistory.goBack}>Back</button>
      </div>
    );
  }
}

export default MoviePage;
