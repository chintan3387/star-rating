import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

import StarRating from './components/StarRating';

fontawesome.library.add(solid, regular); // function takes valid fontawesome icons or sets. makes them available globally. to all our components.

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarRating rating={5} />
      </div>
    );
  }
}

export default App;
