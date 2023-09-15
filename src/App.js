import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/LandingPage/Landing';
import CombinedMapContent from './Components/MapBoxContent/CombinedMapContent';
import Dash from './Components/DashboardContent/Dash.js';
import { ClerkProvider } from '@clerk/clerk-react';
import SignUpPage from './Components/SignUpContent/SignUpPage';
import ProtectedRoute from './Components/SignUpContent/ProtectedRoute';
import PublicRoute from './Components/SignUpContent/PublicRoute';



if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}


function App() {
  return (
    <Router>
      <div className="App">
        <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/mapbox" element={<CombinedMapContent />} />
            <Route path="/signup" element={<PublicRoute><SignUpPage /></PublicRoute>} />
            <Route path="/dashboard/*" element={<ProtectedRoute><Dash /></ProtectedRoute>} />
          </Routes>
          
        </ClerkProvider>
      </div>
    </Router>
  );
}



export default App;
