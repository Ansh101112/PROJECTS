import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import axios from 'axios';
import './App.css';



function App() {
  const [jokes, setJokes] = useState([]);
  
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  return (
    <>
      <h1>Jokes are here</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

