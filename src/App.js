import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/LandingPage/Landing';
import CombinedMapContent from './Components/MapBoxContent/CombinedMapContent';
import Dash from './Components/DashboardContent/Dash.js';
import { ClerkProvider } from '@clerk/clerk-react';
import SignUpPage from './Components/SignUpContent/SignUpPage';
import ProtectedRoute from './Components/SignUpContent/ProtectedRoute';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

function App() {
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/mapbox" element={<CombinedMapContent />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dash />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
