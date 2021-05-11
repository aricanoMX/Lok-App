const getUsers = async () => {
  const response = await fetch('https://reqres.in/api/login');
  const { data: users } = await response.json();
  return users;
};

export default getUsers;
