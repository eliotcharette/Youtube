import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCFO39RM4Zj02FGUpvdoxaf9uIfoIKZBJU';

//Create a ndew component. this component should procdue
//some html
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
);
}

//Take this components generate HTML and
//Tput it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'))
