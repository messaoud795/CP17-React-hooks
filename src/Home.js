import React from "react";
import App from "./App";
import MovieDetails from './MovieDetails'
import{BrowserRouter as  Router , Route} from 'react-router-dom'
import {MovieList} from "./MovieList";


//paths to different pages
function Home() {
 return(
   <div>
<Router>
  {/* path to main page */}
    <Route path='/' exact component={App}></Route>
  {/* path to description page */}
    <Route path="/:id" exact render={()=> <MovieDetails Movies={MovieList}/>}></Route>
  </Router>
</div>);}
  


export default Home;
