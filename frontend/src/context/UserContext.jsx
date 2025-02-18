import React, { createContext, useState } from 'react';

// Creating a context for user data
export const UserDataContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <UserDataContext.Provider value={[user, setUser]}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserContextProvider;
