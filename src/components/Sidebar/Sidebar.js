import React, { useState, useEffect, useCallback, useContext } from 'react';

import { SidebarStyle, SidebarWrapper, UserWrapper, PostsWrapper } from './SidebarStyles';

import UserContext from 'store/context/userContext';

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const { specificUser, posts } = useContext(UserContext);
  console.log(posts);

  const handleCloseSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleEditInformationSideBar = (e) => {
    e.stopPropagation();
  };

  return (
    <SidebarStyle showSideBar={showSideBar} onClick={handleCloseSidebar}>
      <SidebarWrapper onClick={handleEditInformationSideBar}>
        <UserWrapper>
          <div>
            <picture>
              <img src={specificUser.avatar} alt="User Image" />
            </picture>
          </div>
          <figcaption>
            <h3>{`${specificUser.first_name} ${specificUser.last_name}`}</h3>
            <p>{specificUser.email}</p>
          </figcaption>
        </UserWrapper>
        <hr />
        <div className="title">
          <h1>Posts</h1>
          <h1>[{posts.length}post]</h1>
        </div>
        <PostsWrapper>
          {posts.map((post) => (
            <div>
              <h3>
                {post.id}.- &nbsp;
                {post.title}
              </h3>
              <p>{post.body}</p>
              <div>
                <button>Editar</button>
                <button>Eliminar</button>
              </div>
            </div>
          ))}
        </PostsWrapper>
      </SidebarWrapper>
    </SidebarStyle>
  );
};

export default Sidebar;
