import React, { useState, useEffect, useCallback, useContext } from 'react';
import UserContext from 'store/context/userContext';

import { SidebarStyle, SidebarWrapper, UserWrapper, PostsWrapper } from './SidebarStyles';

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const { specificUser: user, posts } = useContext(UserContext);

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
              <img src={user.avatar} alt="User Image" />
            </picture>
          </div>
          <figcaption>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
          </figcaption>
        </UserWrapper>
        <hr />
        <div className="title">
          <h1>Posts</h1>
          <h1>[{posts.length}post]</h1>
        </div>
        <PostsWrapper>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>
                {post.id}.- &nbsp;
                {post.title}
              </h3>
              <hr />
              <p>{post.body}</p>
              <hr />
              <div>
                <button onClick={() => alert('minombre es andres')}>Editar</button>
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
