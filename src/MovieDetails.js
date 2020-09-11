import React from "react";
import {useParams}from 'react-router-dom'
import {MovieList}  from "./MovieList";
import Iframe from 'react-iframe'
import {useHistory}from 'react-router-dom'

function MovieDetails() {
//get the section of the path which contains the film id
var   movieclicked=useParams().id;
//get the film data:title,description...
for(var i in MovieList){
 if (MovieList[i].id.localeCompare(movieclicked)===0 ) 
  {var index=i;
  var  title= MovieList[index].title; 
   var description=MovieList[index].description;
var trailer=MovieList[index].movietrailer;}}
//get the history hook
var history=useHistory();

 return(
     <div style={{padding:'40px'}}>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <h2>{title}</h2>  
    <button onClick={()=>history.push('/')}style={{backgroundColor:"blue",height:'40px',width:'150px',border:"blue 2px solid", fontSize:"15px",color:'white'}}>Back to Home</button>
    </div>
    <Iframe className='video'  src={trailer} width="660" height="415" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
    <p>{description}</p>
</div>)}
  


export default MovieDetails;