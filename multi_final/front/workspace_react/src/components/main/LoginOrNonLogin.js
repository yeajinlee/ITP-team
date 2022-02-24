import React, { useState } from 'react';
import { signIn } from '../../page/auth';

const LoginOrNonLogin = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password}));
  const logout = () => setUser(null);
  
  return (
    <div>
      
    </div>
  );
};

export default LoginOrNonLogin;