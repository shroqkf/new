import React from 'react';

function Movie({title, poster_path, vote_average, id}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300"; // 이미지의 URL
  const posterUrl = `${imageUrl}${poster_path}`;  // 포스터의 URL

  return (
    <div className="movie">
      <img src={posterUrl} alt={title} />
        <div className="movie-details">
          <h4>{title}</h4>
          <span>{vote_average}</span>
          <p>{id}</p>
        </div>
    </div>
  );
}
export default Movie;

