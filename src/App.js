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
import CombinedMapContent from './Components/MapBoxContent/CombinedMapContent'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/datatest" element={<DataTest />} />
          <Route path="/formtest" element={<FormTest />} /> 
          <Route path="/" element={<Landing/>} />
          <Route path="/mapbox" element={<CombinedMapContent/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
