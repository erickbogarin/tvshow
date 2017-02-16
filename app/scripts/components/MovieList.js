import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

const MovieList = props => {
  const searchBody = 'search-body';
  return (
    <ul className={classnames({ [searchBody]: props.movies.length })}>
      {props.movies.map(movie => 
        <li key={movie.id}>
          <Link 
            className="card-box"
            to={`movie/${movie.id}`}>
            <img 
              className="image"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
              alt={movie.title} />
            <h3 className="title">{movie.title}</h3>
          </Link>
        </li>
      )}
    </ul>  
  );
}

export default MovieList;
