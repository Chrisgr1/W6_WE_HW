import React from 'react';
import './App.css';

function App() {
  // we can write JS code here
  const me = {
    name: "Chris",
    age: "too many"
  };
  const { name, age } = me

  return(
    <div>
  <h1 className="title">Hello World</h1>
  <p> This is a paragraph of text</p>
  <p>My name is {name} and I'm {age} years old</p>
  </div>
  );
}


export default App;