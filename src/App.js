import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import { Forminput } from './component/input';

function App() {
  return (
    <div className="App">
      <Forminput/>
    </div>
  );
}

export default App;
