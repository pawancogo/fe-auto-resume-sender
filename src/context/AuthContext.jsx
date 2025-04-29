import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fetch current user if authtoken exists
  useEffect(() => {
    const token = Cookies.get('authtoken');
    if (token) {
      axios.get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        setUser(res.data.user); // assumes backend returns { user: { name, email, ... } }
      }).catch(() => {
        setUser(null);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
