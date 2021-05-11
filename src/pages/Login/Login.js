import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import useModal from 'hooks/useModal';

import getLogin from 'helpers/getLogin';
import SEOHeader from 'components/SEOHeader';
import Modal from 'components/Modal/Modal';

import { LoginStyles } from './LoginStyles';

const initialUsers = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
};

const Login = () => {
  // const { isOpenModal, openModal, closeModal } = useModal(true);
  const [initialUser, setInitialUser] = useState(initialUsers);
  const { email, password } = initialUser;
  const [usersLogin, setUsersLogin] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const history = useHistory();
  console.log(history);

  console.log(initialUser);
  console.log(usersLogin);

  useEffect(() => {
    getLogin().then((user) => setUsersLogin(user));
  }, []);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...usersLogin,
      [e.target.name]: e.target.value,
    };
    setUsersLogin(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === initialUsers.email && password === initialUsers.password) {
      console.log('hola');
      history.push('/');
    }
    // console.log(email.target.value);
  };

  return (
    <LoginStyles>
      <SEOHeader title={'Login App Lok'} />
      <Modal
        img="https://banner2.cleanpng.com/20180412/kaq/kisspng-computer-icons-lock-multi-factor-authentication-fo-key-5acee064e6fdc4.3148491015235073009462.jpg"
        title="Sign In"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore harum, accusamus ipsa
          corporis quibusdam asperiores?
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {/* <h4>Error Message</h4> */}
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            name="password"
            password={password}
            onChange={handleInputChange}
          />
          {/* <h4>Error Message</h4> */}
          <button>Sign In</button>
        </form>
        <Link to="/register">
          <small>Register Email</small>
        </Link>
      </Modal>
    </LoginStyles>
  );
};

export default Login;
