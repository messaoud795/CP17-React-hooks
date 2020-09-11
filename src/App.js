import React, { useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import {MovieList} from "./MovieList";
import Filter from "./Filter";
import NewMovie from "./NewMovie";
import { Link } from "react-router-dom";


function App() {
  // initialize the state of movies
  var [movies, setmovies] = useState(MovieList);
  //get and set the rate state
  var [rate, setrate]=useState(null);


  //function activated on any change in the search input
  function onsearchchange(event) {
  // get the value in the search input
    var searchfield = event.target.value;
  //filter movies according to name or rate
    function test1(item) {
      return (
        item.title.toLowerCase().includes(searchfield.toLowerCase()) 
      );
    }
    var filteredmovies = MovieList.filter(test1);
    //assign the new movies list to the state movies
    setmovies(filteredmovies);
  }

  //add a new movie
  function handlesubmit(event) {
    event.preventDefault();
    var form = document.getElementById("moviedata");
    setmovies([
      ...movies,
      {
        title: form.title.value,
        rate: form.rate.value,
        posterUrl: form.posterurl.value,
        description: form.description.value,
      },
    ]);
    form.reset();
    document.getElementById('newmovie').style.display = "none";
  }


//set and get the rate
function passRateToParent(newrate) {
  setrate(newrate);

}
var openform=document.getElementById('newmovie');

function reply_click()
{console.log(document.getElementById('card'))
}
  return (
    <div className="App">
      <Link to="/">
        <div>
      <Filter searchchange={onsearchchange}  passRateToParent={passRateToParent} openform={openform}/>

      <NewMovie handlesubmit={handlesubmit} />
      <div className="listmovies">
        {rate ? movies.filter(movie=>movie.rate>= rate).map((movie) => (
          <MovieCard Movie={movie}  onClick={reply_click} ></MovieCard>
        )) : movies.filter(movie=>movie.rate>= rate).map((movie) => (
          <MovieCard Movie={movie}></MovieCard>
        ))}
      </div>
    </div>
      </Link>
    </div>
  );
}

export default App;
