const getUsers = async (page = 1) => {
  const url = 'https://reqres.in/api/users?page=' + page;
  const response = await fetch(url);
  const { data: users } = await response.json();
  return users;
};

export default getUsers;
