// ProtectedRoute.js
import { SignedIn } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  return (
    <SignedIn>
      {children}
    </SignedIn>
  );
}

export default ProtectedRoute;

