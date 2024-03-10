import {React, useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({children}) => {
  let {user} = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace/>;
  }else{
    return children;
  }
}

export default PrivateRoute
