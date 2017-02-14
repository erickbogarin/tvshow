import React from 'react';

const MovieList = props => {
  return (
    <ul className="search-body">
      {props.movies.map(movie => 
        <li
          className="d-flex flex-column" 
          key={movie.id}>
          <div>{movie.title}</div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/>
        </li>
      )}
    </ul>  
  );
}

export default MovieList;
