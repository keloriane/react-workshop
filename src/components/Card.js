import React from 'react';
import movies from './../data.json';
const Card = () => {
    return (
        <div className="movie-container">
        {movies.movie.map(movie =>
        <div className="wrapper-card" key={movie.imdbID}>
            <div className="poster-container">

        <img src={movie.Poster} alt="" />
            </div>
        <div className="details">
          <h3>{movie.Title}</h3>
          <h4>{movie.Year}</h4>
          <p>{movie.Plot}</p>
          
        </div>
          </div>
          )}
      </div>
    )
}

export default Card