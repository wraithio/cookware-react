// 1. Create the context (DataContext.js)
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUsers } from '../utils/DataServices';

// Create the context
const DataContext = createContext();

// Create a custom hook to use the context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Create the provider component
export const DataProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [theme, setTheme] = useState('light');
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchUsers = async()  =>{
        const allAdmins = await getUsers()
        setAdmins(allAdmins.filter(admin => admin.isActive == true))
    }

    fetchUsers()
  })

  const value = {
    userId,
    setUserId,
    username,
    setUsername,
    admins,
    setAdmins,
    theme,
    setTheme,
    isAdmin,
    setIsAdmin,
    cartItems,
    setCartItems
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};