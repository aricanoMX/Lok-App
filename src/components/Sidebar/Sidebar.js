import React, { useState, useEffect, useCallback, useContext } from 'react';

import getPosts from 'helpers/getPosts';

import { SidebarStyle, SidebarHeader, Navbar } from './SidebarStyles';

import UserContext from 'context/userContext';
import PostsContext from 'context/postsContext';

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const { users } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  // console.log(users);
  console.log(posts);

  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (users?.id) {
      updatePosts();
    }
  }, [users, updatePosts]);

  const updatePosts = useCallback(() => {
    getPosts(users.id).then((newPosts) => setPosts(newPosts));
  }, [users.id]);

  const handleCloseSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleEditInformationSideBar = (e) => {
    e.stopPropagation();
  };

  return (
    <SidebarStyle showSideBar={showSideBar} onClick={handleCloseSidebar}>
      <div onClick={handleEditInformationSideBar}></div>
    </SidebarStyle>
  );
};

export default Sidebar;
