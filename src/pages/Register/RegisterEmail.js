import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { LOGIN } from 'routes/paths';

import Modal from 'components/Modal/Modal';

import { RegisterEmailStyles } from './RegisterEmailStyles';

const RegisterEmail = () => {
  const [emailRegistered, setEmailRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const isRegisteredEmail = async () => {
    setLoading(true);

    setEmailRegistered(false);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isRegisteredEmail();
    setTimeout(() => {
      history.push('/');
    }, 2000);
  };

  return (
    <RegisterEmailStyles>
      {emailRegistered ? (
        <h1>Email Registered</h1>
      ) : (
        <Modal
          img="https://banner2.cleanpng.com/20180412/kaq/kisspng-computer-icons-lock-multi-factor-authentication-fo-key-5acee064e6fdc4.3148491015235073009462.jpg"
          title="Register Email"
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
              // value={email}
              // onChange={handleInputChange}
            />
            <button>Register</button>
          </form>
          <Link to={LOGIN}>
            <small>{`Go Back ⬅`}</small>
          </Link>
        </Modal>
      )}
    </RegisterEmailStyles>
  );
};

export default RegisterEmail;
