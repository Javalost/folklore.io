// PublicRoute.js
import { SignedOut } from '@clerk/clerk-react';

function PublicRoute({ children }) {
  return (
    <SignedOut>
      {children}
    </SignedOut>
  );
}

export default PublicRoute;
