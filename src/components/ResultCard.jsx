import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieTowached, watchlist, watched } = useContext(GlobalContext);

  let storedMovie = watchlist.find((m) => m.id === movie.id);
  let storedMoviewatched = watched.find((m) => m.id === movie.id)

  const watchListDisabled = storedMovie ? true : storedMoviewatched ? true : false;
  const watchedDisabled = storedMoviewatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title"> {movie.title} </h3>
          <h4 className="release-data">
            {movie.release_date ? movie.release_date.substring(0, 4) : `-`}
          </h4>
        </div>

        <div className="controls">
          <button className="btn"
            disabled={watchListDisabled}
            onClick={() => (addMovieToWatchlist(movie))} >
            Add to watchlist
          </button>

          <button className="btn"
            disabled={watchedDisabled}
            onClick={() => (addMovieTowached(movie))} >
            Add to watched
          </button>

        </div>
      </div>
    </div>
  );
};

export default ResultCard;
