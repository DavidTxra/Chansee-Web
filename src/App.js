import React from 'react';
import Navbar from './components-a/Navbar';
import MenuAdmin from './components-a/MenuAdmin';
import Tableau from './components-a/Tableau';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <MenuAdmin />
      <Tableau />

    </div>
  );
}

export default App;
