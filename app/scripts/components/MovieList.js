import React from 'react';
import classnames from 'classnames';

const MovieList = props => {
  const searchBody = 'search-body';
  return (
    <ul className={classnames({ [searchBody]: props.movies.length })}>
      {props.movies.map(movie => 
        <li
          className="card-box" 
          key={movie.id}>          
          <img 
            className="image"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
            alt={movie.title} />
          <h3 className="title">{movie.title}</h3>
        </li>
      )}
    </ul>  
  );
}

export default MovieList;
