const getReqres = async (complement) => {
  const url = 'https://reqres.in/api' + complement;
  const response = await fetch(url);
  const { data: users } = await response.json();
  return users;
};

export default getReqres;
