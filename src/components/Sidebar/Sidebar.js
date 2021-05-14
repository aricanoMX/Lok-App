import React, { useState, useEffect, useCallback, useContext } from 'react';
import UserContext from 'store/context/userContext';

import {
  SidebarStyle,
  SidebarWrapper,
  UserWrapper,
  PostsWrapper,
  NewPostsWrapper,
} from './SidebarStyles';

const initialPostValues = {
  title: '',
  body: '',
};

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const { specificUser: user, posts, setPosts } = useContext(UserContext);
  const [postValues, setPostValues] = useState(initialPostValues);
  const { title, body } = postValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    if (editPost) {
      setPostValues(editPost);
    }
  }, [editPost]);

  const handleCloseSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleEditInformationSideBar = (e) => {
    e.stopPropagation();
  };

  const deletePost = (postId) => {
    const changedPosts = posts.filter((post) => post.id !== postId);
    setPosts(changedPosts);
  };
  const addNewPost = (newPostValue) => {
    const newPost = {
      id: Date.now(),
      ...newPostValue,
    };
    const changedPosts = [...posts, newPost];
    setPosts(changedPosts);
  };
  const updatePost = (postEdited) => {
    const changedPosts = posts.map((post) => (post.id !== postEdited.id ? postEdited : post));
    setPosts(changedPosts);
  };

  const handleInputChange = (e) => {
    const changedPostsValues = {
      ...postValues,
      [e.target.name]: e.target.value,
    };
    setPostValues(changedPostsValues);
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      setError('Please indicate a [Title] for the new post');
      return;
    }
    if (body.trim() === '') {
      setError('Please indicate a [Description] for the new post');
      return;
    }

    if (editPost) {
      updatePost(postValues);
      setSuccessMessage('Successfully Updated');
    } else {
      addNewPost(postValues);
      setSuccessMessage('Successfully Added');
      setPostValues(initialPostValues);
    }
    setTimeout(() => {
      setSuccessMessage(null);
    }, 1500);
    setError(null);
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
                <button onClick={() => setEditPost(post)}>Editar</button>
                <button onClick={() => deletePost(post.id)}>Eliminar</button>
              </div>
              <hr />
            </div>
          ))}
        </PostsWrapper>
        <NewPostsWrapper>
          <div>
            <h2>{editPost ? 'Edit Post' : 'Add New Post'}</h2>
            {editPost && (
              <button onClick={() => setEditPost(null)}>
                <small>Exit Edit</small>
              </button>
            )}
          </div>
          <hr />
          {error && <small className="error">{error}</small>}
          {successMessage && <small className="success">{successMessage}</small>}
          <form onSubmit={handleNewPostSubmit}>
            <input
              type="text"
              placeholder="Title of The New Post"
              value={title}
              name="title"
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Description of The New Post"
              value={body}
              name="body"
              onChange={handleInputChange}
            ></textarea>
            <button>{editPost ? 'Update Post' : 'Add Post'}</button>
          </form>
        </NewPostsWrapper>
      </SidebarWrapper>
    </SidebarStyle>
  );
};

export default Sidebar;
