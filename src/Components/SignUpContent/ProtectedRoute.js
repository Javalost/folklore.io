import { useUser, RedirectToSignIn } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  const { user } = useUser();

  if (!user) {
    return <RedirectToSignIn />;
  }

  return children;
}


export default ProtectedRoute;
