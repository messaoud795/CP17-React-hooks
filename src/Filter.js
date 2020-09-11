import React, { useState, useEffect } from 'react';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Rating from "./Rating";


function Filter({searchchange,openform,passRateToParent}){

var [rate, setrate]=useState('');
//get rate from rating component and set the rate state
function handlerate(newvalue) {
setrate(newvalue);
}
//open form on click
function openformulaire() {
    openform.style.display = "block";
}

//sent the rate to App component
useEffect(()=> {
    passRateToParent(rate);   
  })

    return(
       
        <div className='filter' >
           <button  classname='add'id='add'onClick={openformulaire}> <FontAwesomeIcon icon={faPlusCircle} /> </button>
            <input type="search" placeholder="search movies " onChange={searchchange} />
            <Rating  handlerate={handlerate} id='filterrate' />
            
        </div>

    );
}
export default Filter;