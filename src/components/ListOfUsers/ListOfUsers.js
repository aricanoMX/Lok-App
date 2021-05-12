import React, { useState, useEffect, useContext } from 'react';

import Sidebar from 'components/Sidebar/Sidebar';
import UserContext from 'context/userContext';

import { ListOfUsersStyles, CardOfUser } from 'components/ListOfUsers/ListoOfUsersStyles';

const ListOfUsers = () => {
  const { users } = useContext(UserContext);

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <ListOfUsersStyles>
      <CardOfUser onClick={() => setShowSideBar(!showSideBar)}>
        {users.map((user) => (
          <div key={user.id} onClick={() => setShowSideBar(showSideBar)}>
            <picture>
              <img src={user.avatar} alt="User Image" />
            </picture>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
          </div>
        ))}
        {showSideBar && <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />}
      </CardOfUser>
    </ListOfUsersStyles>
  );
};

export default ListOfUsers;
