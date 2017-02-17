import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import * as Actions from '../actions';

class MoviePage extends Component {
  componentDidMount() {
    this.props.fetchFindMovie(this.props.params.id);
  }
  
  render() {
    const { movie } = this.props;
    return (
      <div className="container">
      <h2>{movie.title}</h2>
        <button onClick={browserHistory.goBack}>Back</button>        
        <div>
          <img 
            className="image"
            src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} 
            alt={movie.title} />
          <div>{new Date(movie.releaseDate).getFullYear()}</div>
          <div>{movie.rated}</div>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, Actions)(MoviePage);
