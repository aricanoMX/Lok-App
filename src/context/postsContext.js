import React, { useState, useEffect, createContext } from 'react';

import getPosts from 'helpers/getUsers';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const data = { posts, setPosts };

  useEffect(() => {
    updatePosts();
  }, []);

  const updatePosts = () => {
    getPosts().then((newPosts) => setPosts(newPosts));
  };

  return <PostsContext.Provider value={data}>{children}</PostsContext.Provider>;
};

export { PostsProvider };
export default PostsContext;
