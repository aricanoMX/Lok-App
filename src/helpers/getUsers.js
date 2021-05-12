const getUsers = async () => {
  const url = 'https://reqres.in/api/users';
  const response = await fetch(url);
  const { data: users } = await response.json();
  return users;
};

export default getUsers;
