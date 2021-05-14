const getAlbums = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};

export default getAlbums;
