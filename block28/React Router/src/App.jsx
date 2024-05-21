import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './Red';
import Blue from './Blue';
import Home from './Home';

function App() {
  return (
    <div id="container">
    <h1>Hello React Router!</h1>
    <div id="navbar">
    <Link to={"/home"}>{<h1>home</h1>}</Link>
    <Link to={"/blue"}>{<h1>blue</h1>}</Link>
    <Link to={"/red"}>{<h1>red</h1>}</Link>
    </div>
    <div id="main-section">
      <Routes>
          <Route path="/blue" element={<Blue/>} />         
          <Route path="/red" element={<Red/>} />      
          <Route path="/home" element={<Home/>} />      
      </Routes>
    </div>
  </div>
  )
}

export default App
