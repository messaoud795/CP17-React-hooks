import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 10
    };
  }
 
  onStarClick = (nextValue, prevValue, name)=> {
    this.setState({rating: nextValue});  
  }


              
  render() {
    const { rating } = this.state;
    this.props. handlerate(rating.toString());
    return (                
      <div style={{display:'inline-block'}}>
        <h2 style={{fontSize:'15px',color:'white'}}>Filter movies by rate: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick}
          /> 
          </div> 
    );
  }
}
 
export default Rating;