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
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri="http://localhost:3000"
      > 
      
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
    </Auth0Provider>
  );
}

export default App;
