import React from 'react';

import { ModalStyles } from './ModalStyles';

const Modal = ({ closeModal, title, img, children }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalStyles onClick={handleModalClick}>
      {img.length > 1 ? (
        <picture>
          <img src={img} alt="Logo" />
        </picture>
      ) : null}
      <h1>{title}</h1>
      {children}
    </ModalStyles>
  );
};

export default Modal;
