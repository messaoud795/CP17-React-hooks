import React from "react";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

function MovieCard(props) {
  //assign props to movie object
  var movie = props.Movie;


  return (
    // link to page description includes the movie ide
    <Link to={`/${movie.id}`} >
    <div id="card" >
          <div>
        <div className="info">
          <p id="title">{movie.title}</p>
          <p className="rating">
            <StarRatingComponent
              name="rate1"
              starCount={10}
              value={movie.rate}
            />
          </p>
        </div>
        <img
          className="moviepic"
          src={movie.posterUrl}
          alt="fail to load image"
        />
        <p className="description">{movie.description}</p></div>
    </div>
      </Link>
  );
}
export default MovieCard;
