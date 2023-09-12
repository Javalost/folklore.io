import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import Landing from './Components/LandingPage/Landing';
import CombinedMapContent from './Components/MapBoxContent/CombinedMapContent' 
import SignUp from './Components/SignUpContent/SignUp'; 
import Dash from './Components/DashboardContent/Dash.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/mapbox" element={<CombinedMapContent/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dash/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
