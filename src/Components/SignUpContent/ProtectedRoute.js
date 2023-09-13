import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
    const user = useUser();
  
    if (!user) {
      window.location.href = "/signup";
      return null;
    }
  
    return children;
  }
  

export default ProtectedRoute;
