import React, { useState, useEffect } from 'react';

import getUsers from 'helpers/getUsers';

import SEOHeader from 'components/SEOHeader';

const Home = () => {
  useEffect(() => {
    validateUsers();
    console.log;
  }, []);

  const validateUsers = () => {
    getUsers().then((user) => setUsers(user));
  };

  return (
    <div>
      <SEOHeader title={`Home ${user}`} />
      <h1>Hola home</h1>
    </div>
  );
};

export default Home;
