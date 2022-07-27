import React from "react";
import Home from "./Components/Home";
import Login from './Components/Login'
import {BrowserRouter as Router, Routes, Route, 
  //Navigate
  } from 'react-router-dom'



const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
