import React, { useState, useEffect, createContext } from 'react';

import getUsers from 'helpers/getUsers';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const data = { users };

  useEffect(() => {
    updateUser();
  }, []);

  const updateUser = () => {
    getUsers().then((newUser) => setUsers(newUser));
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
