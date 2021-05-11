const getUsers = async () => {
  const response = await fetch('https://reqres.in/api/users');
  const { data: users } = await response.json();
  return users;
};

export default getUsers;
