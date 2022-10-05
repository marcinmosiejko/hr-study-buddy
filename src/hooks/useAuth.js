import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Every time we mount Root component, we check if there's a token in local storage, if it does, we pass it into axios.get as header: authorization. If that passes successfully, we get a response with a user that we set into state, which triggers rerender and the user stays logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    (async () => {
      try {
        const response = await axios.get('/me', {
          headers: { authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const signIn = async ({ login, password }) => {
    console.log('test');
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      // To keep user logged in
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  // For scenarios when using useAuth hook outside AuthContext
  if (!auth) throw Error('useAuth needs to be used inside AuthContext');

  return auth;
};
