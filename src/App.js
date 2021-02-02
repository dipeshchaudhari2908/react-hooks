import React from 'react';
import './App.css';
import State from './components/State';
import Effect from './components/Effect';
import Useeffect from './components/Useeffect';


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
      <b><u><h1>useState Page</h1></u></b>
      <State/>
      <p>**********************</p>
      <Effect/>
      <p>************************</p>
      <Useeffect/>
    </div>
  );
}

export default App;
