import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCrad from "./MovieCrad";

const Watchlist = () => {

  const { watchlist } = useContext(GlobalContext)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My watchlist</h1>
          <span className="count-pill">{watchlist.length} {watchlist.length === 1 ? `Movie` : `Movies`}</span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCrad key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (<h2 className="no-movies">No movies in watchlist add some</h2>
        )};

      </div>
    </div>
  );
};

export default Watchlist;
