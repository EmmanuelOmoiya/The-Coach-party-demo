import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() =>{
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  },[]);
  return (
    <div className="App">
      <Navbar />
     <div className="content">
      <Home />  
      <p className= 'server'>{!data? "Loading...": data}</p>  
     </div>
    </div>
  );
}

export default App;