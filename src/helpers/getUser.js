const getUsers = async (userId) => {
  const url = `https://reqres.in/api/users?id=${userId}`;
  const response = await fetch(url);
  const { data: users } = await response.json();
  return users;
};

export default getUsers;
