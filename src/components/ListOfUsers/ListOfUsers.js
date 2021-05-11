import React from 'react';

import { ListOfUsersStyles, CardOfUser } from 'components/ListOfUsers/ListoOfUsersStyles';

const ListOfUsers = ({ users }) => {
  return (
    <ListOfUsersStyles>
      <CardOfUser>
        {users.map((user) => (
          <div key={user.id} onClick={() => alert(`Hola ${user.first_name} ${user.last_name}`)}>
            <picture>
              <img src={user.avatar} alt="User Image" />
            </picture>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </CardOfUser>
    </ListOfUsersStyles>
  );
};

export default ListOfUsers;
