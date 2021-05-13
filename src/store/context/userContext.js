import React, { useState, useEffect, createContext } from 'react';

import getUsers from 'helpers/getUsers';
import getUser from 'helpers/getUser';
import getPosts from 'helpers/getPosts';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [specificUser, setSpecificUser] = useState([]);
  const [posts, setPosts] = useState([]);

  const toggledSelectedUser = (userId) => {
    getUser(userId).then((newUser) => setSpecificUser(newUser));
    getPosts(userId).then((newPosts) => setPosts(newPosts));
  };

  const data = { users, toggledSelectedUser, specificUser, posts };

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
