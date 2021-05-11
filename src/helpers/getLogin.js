const getLogin = async () => {
  const response = await fetch('https://reqres.in/api/login');
  const { data } = await response.json();
  return data;
};

export default getLogin;
