import React from 'react';
import MovieCard from '../MoviesCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          author={movie.author_name ? movie.author_name.join(', ') : 'Unknown'}
          releasedYear={movie.first_publish_year}
        
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  );
};

export default MovieList;
