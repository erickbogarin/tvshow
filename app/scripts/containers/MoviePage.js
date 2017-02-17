import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import Isvg from 'react-inlinesvg';

import * as Actions from '../actions';

import Header from '../components/Header';

class MoviePage extends Component {
  componentDidMount() {
    this.props.fetchFindMovie(this.props.params.id);
  }

  render() {
    const { movie } = this.props;
    return (
      <div>
        <Header className="container text-center" />

        <div className="movie-header">
          <h2 className="title">{movie.title}</h2>
          <div>Score: {movie.rated} / 10</div>
        </div>

        <div className="container movie-overview">
          <div className="movie-legend">
            <button className="button" onClick={browserHistory.goBack}>
              <Isvg className="icon" src={require(`../../../assets/media/icons/arrow-left.svg`)} />
            </button>
            <span className="divider">/</span>
            <h2 className="title">Overview</h2>
          </div>

          <hr className="divider" />

          <div className="summary movie-content">
            <img
              className="image"
              src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
              alt={movie.title} />
            <div className="container">
              <p>{movie.overview}</p>
              <div><span className="text-danger">Release Date:</span> {new Date(movie.releaseDate).getFullYear()}</div>
              <div><span className="text-danger">Populrity:</span> {Math.floor(movie.popularity)}</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, Actions)(MoviePage);
