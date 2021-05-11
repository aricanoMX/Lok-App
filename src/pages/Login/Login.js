import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useModal from 'hooks/useModal';

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
  const [users, setUsers] = useState(initialUsers);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // validateUsers();
    getLogin().then((user) => setUsers(user));
  }, []);

  const validateUsers = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.target.value);
  };

  return (
    <LoginStyles>
      <SEOHeader title={'Login App Lok'} />
      <Modal
        // img=""
        img="https://banner2.cleanpng.com/20180412/kaq/kisspng-computer-icons-lock-multi-factor-authentication-fo-key-5acee064e6fdc4.3148491015235073009462.jpg"
        title="Sign In"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore harum, accusamus ipsa
          corporis quibusdam asperiores?
        </p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          {/* <h4>Error Message</h4> */}
          <input type="password" placeholder="Password" />
          {/* <h4>Error Message</h4> */}
          <button>Sign In</button>
        </form>
        <Link to="">
          <small>Forgot Your Password?</small>
        </Link>
      </Modal>
    </LoginStyles>
  );
};

export default Login;
