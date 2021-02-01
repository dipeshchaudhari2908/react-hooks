import React from 'react';
import './App.css';
import State from './components/State';


const data = ["India", 1947, "Narendra Modi"];

function App() {

  const [country,I_year,pm] = data;
  return (
    <div className="App">
      <p>Hello React-Hooks</p>
      <p>*******************************</p>
      <p>Counrty: {country}</p>
      <p>Independence year: {I_year}</p>
      <p>Prime Ministaer: {pm} </p>
<p>************************************</p>
      <p>State Page</p>
      <State/>
    </div>
  );
}

export default App;
