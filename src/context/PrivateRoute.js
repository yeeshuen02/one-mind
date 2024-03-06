import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({children}) => {
  let {user, loading} = useAuth();
  
  if (loading) {
    return <p>Loading...</p>; // You can replace this with your loading component
  }

  if (!user){
    return <Navigate to="/login" />;
  }
    return children;
}

export default PrivateRoute
