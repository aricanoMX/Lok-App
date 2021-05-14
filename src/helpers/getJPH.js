const getJPH = async (complement) => {
  const url = 'https://jsonplaceholder.typicode.com' + complement;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getJPH;
