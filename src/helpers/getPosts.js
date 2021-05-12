const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};

export default getPosts;
