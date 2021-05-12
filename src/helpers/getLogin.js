const getLogin = async () => {
  const url = 'https://reqres.in/api/login';
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};

export default getLogin;
