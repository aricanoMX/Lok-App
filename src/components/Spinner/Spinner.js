import React from 'react';

import { SpinnerStyles } from './SpinnerStyles';

const Spinner = () => {
  return (
    <SpinnerStyles className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerStyles>
  );
};

export default Spinner;
