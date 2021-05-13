import React, { useState, useEffect, useCallback, useContext } from 'react';

import getPosts from 'helpers/getPosts';

import { SidebarStyle, SidebarHeader, Navbar } from './SidebarStyles';

import UserContext from 'store/context/userContext';
import PostsContext from 'store/context/postsContext';

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const { users } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);

  useEffect(() => {
    if (users?.id) {
      updatePosts();
    }
  }, [users, updatePosts]);

  const updatePosts = useCallback(() => {
    getPosts().then((newPosts) => setPosts(newPosts));
  }, []);

  const handleCloseSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleEditInformationSideBar = (e) => {
    e.stopPropagation();
  };

  return (
    <SidebarStyle showSideBar={showSideBar} onClick={handleCloseSidebar}>
      <div onClick={handleEditInformationSideBar}>{}</div>
    </SidebarStyle>
  );
};

export default Sidebar;
