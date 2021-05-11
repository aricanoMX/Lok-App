import React, { useState, useEffect } from 'react';

import getUsers from 'helpers/getUsers';

import SEOHeader from 'components/SEOHeader';

const Home = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    // validateUsers();
    getUsers().then((user) => setUsers(user));
  }, []);

  // const validateUsers = () => {};

  return (
    <div>
      <SEOHeader title={`Home ${users.first_name}`} />
      <h1>Hola home</h1>
    </div>
  );
};

export default Home;
