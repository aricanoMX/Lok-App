import { useContext } from 'react';

const userReducer = (state, action) => {
  const { users } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);

  switch (action.type) {
    case type.default:
      return state;
  }
};
export default userReducer;
