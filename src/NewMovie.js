import React , {useEffect}  from "react";
import './NewMovie.css';

function NewMovie({handlesubmit }) {
  //close window by click on the exit button
  function closewindow() {
    document.getElementById('newmovie').style.display = "none";  }
 
    return (
        <div id='newmovie'  >
        <h2>Add a new movie :</h2>
        <form onSubmit={handlesubmit} id='moviedata'>
        <label className="label">Title :</label>

          <input type="text" id='title1' name='title'placeholder='Enter the title'  />
          <br/>
        <label className="label"> Rate :  </label>
          <input type="text" id='rate' name='rate' placeholder='Enter the rate'  />
        <br/>
        <label className="label"> Poster Url :   </label>
          <input type="text" id ='posterurl' name='posterurl'placeholder='Enter the poster Url'  />
       <br/>
        <label className="label"> Description :  </label>
          <input type="text" id='description' name='description'placeholder='Enter the desciption of the new movie'  />
        <br/>
        <div style={{display:'flex', justifyContent:"center" ,marginTop:'30px'}}>
        <input id='sent' type="submit" value="sent" />
        <button id='exit' onClick={closewindow}> Exit </button></div>
      </form>
    </div>
    )
    
}
export default(NewMovie)