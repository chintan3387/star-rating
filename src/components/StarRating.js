import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class StarRating extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating || null,
      temp_rating: null
    }
  }

  handleMouseOver(rating) {
      this.setState(prev => ({
        rating,
        temp_rating: prev.rating
      }))
  }

  handleMouseOut(){
    this.setState(prev => ({
      rating: prev.temp_rating
    }))
  }

  rate(rating) {
    this.setState({
      rating,
      temp_rating: rating
    })
  }

  render() {
    const { rating } = this.state;
     return Array(5)
    .fill(null)
    .map((item , i) => {
      let klass = (rating !== null && rating >= i) ? 'ion-ios-star' : 'ion-ios-star-outline';
      return  <i
                style={{display:"inline-block", overflow: "hidden"}}
                className={klass}
                onMouseOver={() => this.handleMouseOver(i)}
                onClick = {() => this.rate(i)}
                onMouseOut={() => this.handleMouseOut()}
                key={`star-${i}`}
              />
              //<i
              //  style={{display:"inline-block", width: "7px", overflow: "hidden", direction: (i % 2 === 0) ? "ltr" : "rtl"}}
              //  className={klass}
              //  onMouseOver={() => this.handleMouseOver(i)}
              //  onClick = {() => this.rate(i)}
              //  onMouseOut={() => this.handleMouseOut()}
              //  key={`star-${i}`}
              ///>-->
    });
  }
}