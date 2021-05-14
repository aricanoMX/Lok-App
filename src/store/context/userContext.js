import React, { useState, useEffect, createContext, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import getUsers from 'helpers/getUsers';
import getUser from 'helpers/getUser';
import getPosts from 'helpers/getPosts';
import getAlbums from 'helpers/getAlbums';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [specificUser, setSpecificUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);

  const toggleSidebar = (userId) => {
    getUser(userId).then((newUser) => setSpecificUser(newUser));
    getPosts(userId).then((newPosts) => setPosts(newPosts));
  };
  const toggleAlbums = useCallback((userId) => {
    getAlbums(userId).then((newAlbums) => setAlbums(newAlbums));
    getUser(userId).then((newUser) => setSpecificUser(newUser));
    history.push('/album/user#' + userId);
  }, []);

  const data = { users, toggleSidebar, toggleAlbums, specificUser, posts, albums };
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
