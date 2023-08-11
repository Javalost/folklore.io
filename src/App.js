import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import DataTest from './Components/DataTest';
import FormTest from './Components/FormTest'; 
import Landing from './Components/LandingPage/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/datatest" element={<DataTest />} />
          <Route path="/formtest" element={<FormTest />} /> 
          <Route path="/" element={<Landing/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
