import logo from './logo.svg';
import fetch from 'node-fetch'
import './App.css';
import React, {useState} from 'react';

function App() {

  const [data, setData] = useState({time: ""})

  // Figure out how to not do this every fuckin millsecond
  fetch("http://localhost:5000/time")
    .then(r => r.json())
    .then(r => {
      setData(r)
    })

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          It is {JSON.stringify(data.time)}
        </h1>
      </header>
    </div>
  );
}

export default App;
