import React from 'react';

const MovieCard = ({ temp }) => {
  return (
    <div className="movie">
      <div>
        <p>{temp.Year}</p>
      </div>
      
      <div>
        <img src={temp.Poster!='N/A'? temp.Poster : 'https://via.placeholder.com/400'} alt={temp.Title}/>
      </div>

      <div>
        <span>{temp.Type}</span>
        <h3>{temp.Title}</h3>
      </div>
    </div>
  );
  
}

export default MovieCard;