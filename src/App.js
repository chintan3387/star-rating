import React, { Component } from 'react';
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
        <h2> Star rating using React and Ion-Icons</h2>
        <StarRating rating={5} />
      </div>
    );
  }
}

export default App;
