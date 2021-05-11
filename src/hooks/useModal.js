import { useState } from 'react';

const useModal = (initialState) => {
  const [isOpenModal, setIsOpenModal] = useState(initialState);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return [isOpenModal, openModal, closeModal];
};

export default useModal;
