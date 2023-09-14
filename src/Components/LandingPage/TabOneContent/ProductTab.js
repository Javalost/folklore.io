import React from 'react';
import { useUser, SignIn } from '@clerk/clerk-react';

function ProductTab() {
  const { user } = useUser(); // Get the current user using the useUser hook

  return (
    <div>       
      {/* If the user is not signed in, show the SignIn component; otherwise, show nothing */}
      {!user ? <SignIn /> : null}
    </div> 
  );
}

export default ProductTab;
