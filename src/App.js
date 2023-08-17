import React from 'react';
import { BrowserRouter as Router,Routes, Route, useLocation } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import './App.css';

function App() {
  const location = useLocation();
  return (
    
      <div className="App">
        <Routes>
          <Route path='/'  element={<Home/>}></Route>
          <Route path='/about'  element={<About/>}></Route>
          </Routes>
      </div>
    
  );
}

export default App;
