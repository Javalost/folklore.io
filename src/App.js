import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import Landing from './Components/LandingPage/Landing';
import CombinedMapContent from './Components/MapBoxContent/CombinedMapContent' 
import SignIn from './Components/SignInContent/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/mapbox" element={<CombinedMapContent/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
