import React, { useState, useEffect, useContext, useReducer } from 'react';

import UserContext from 'store/context/userContext';
import Sidebar from 'components/Sidebar/Sidebar';

import {
  ListOfUsersStyles,
  CardOfUser,
  MoreUsers,
} from 'components/ListOfUsers/ListoOfUsersStyles';

const ListOfUsers = () => {
  const { users, toggledSelectedUser } = useContext(UserContext);

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <ListOfUsersStyles>
      <CardOfUser onClick={() => setShowSideBar(!showSideBar)}>
        {users.map((user) => (
          <div key={user.id} onClick={() => toggledSelectedUser(user.id)}>
            {/* <div key={user.id} onClick={() => setShowSideBar(showSideBar)}> */}
            <picture>
              <img src={user.avatar} alt="User Image" />
            </picture>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </CardOfUser>
      {showSideBar && (
        <Sidebar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          toggledSelectedUser={toggledSelectedUser}
        />
      )}
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
