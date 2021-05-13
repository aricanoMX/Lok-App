import React, { useState, useEffect, useContext, useReducer } from 'react';

import Sidebar from 'components/Sidebar/Sidebar';
import UserContext from 'store/context/userContext';

import {
  ListOfUsersStyles,
  CardOfUser,
  MoreUsers,
} from 'components/ListOfUsers/ListoOfUsersStyles';

const ListOfUsers = () => {
  const { users, setUsers } = useContext(UserContext);
  const [showSideBar, setShowSideBar] = useState(false);

  // const handleNextPage = () => {
  //   setLoading(true);

  //   setLoading(false);
  // };

  return (
    <ListOfUsersStyles>
      <CardOfUser onClick={() => setShowSideBar(!showSideBar)}>
        {users.map((user) => (
          <div key={user.id} onClick={() => ''}>
            {/* <div key={user.id} onClick={() => setShowSideBar(showSideBar)}> */}
            <picture>
              <img src={user.avatar} alt="User Image" />
            </picture>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </CardOfUser>
      {showSideBar && <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />}
      <MoreUsers>
        {users.length >= 11 ? (
          <button disable>More Users</button>
        ) : (
          <button onClick={() => handleNextPage}>More Users</button>
        )}
      </MoreUsers>
    </ListOfUsersStyles>
  );
};

export default ListOfUsers;
