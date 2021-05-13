import React, { useState, useEffect, createContext, useReducer } from 'react';

import getUsers from 'helpers/getUsers';
import getPosts from 'helpers/getPosts';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    updatePosts();
  }, []);

  useEffect(() => {
    updateUsers();
  }, []);

  const updatePosts = () => {
    getPosts().then((newPosts) => setPosts(newPosts));
  };
  const updateUsers = () => {
    getUsers().then((newUser) => setUsers(newUser));
  };

  return <PostsContext.Provider value={[store, dispatch]}>{children}</PostsContext.Provider>;
};

export { StoreProvider };
export default StoreContext;
