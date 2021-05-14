import React, { useState, useEffect, createContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import getReqres from 'helpers/getReqres';
import getJPH from 'helpers/getJPH';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [specificUser, setSpecificUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    updateUser();
  }, []);

  const updateUser = () => {
    getReqres(`/users`).then((newUser) => setUsers(newUser));
  };

  const toggleSidebar = (userId) => {
    getReqres(`/users?id=${userId}`).then((newUser) => setSpecificUser(newUser));
    getJPH(`/posts?userId=${userId}`).then((newPosts) => setPosts(newPosts));
  };
  const toggleAlbums = useCallback((userId) => {
    getReqres(`/users?id=${userId}`).then((newUser) => setSpecificUser(newUser));
    getJPH(`/albums?userId=${userId}`).then((newAlbums) => setAlbums(newAlbums));
    history.push('/album/user#' + userId);
  }, []);

  const data = {
    users,
    toggleSidebar,
    toggleAlbums,
    specificUser,
    posts,
    setPosts,
    albums,
    setAlbums,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
