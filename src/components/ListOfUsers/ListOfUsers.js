import React from 'react';

import { ListOfUsersStyles } from 'components/ListOfUsers/ListoOfUsersStyles';

const ListOfUsers = ({ users }) => {
  return (
    <ListOfUsersStyles>
      {users.map((user) => (
        <div>
          <p key={user.id}>{user.name}</p>
          <picture>
            <img src="" alt="" />
          </picture>
          <h1>hola mundo</h1>
          <p>fad;lkjfa;kfjl</p>)
        </div>
      ))}
    </ListOfUsersStyles>
  );
};

export default ListOfUsers;
