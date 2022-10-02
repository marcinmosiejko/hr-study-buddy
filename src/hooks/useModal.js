import React, { useState } from 'react';
import Modal from 'components/organisms/Modal/Modal';

const useModal = (initialState = false) => {
  const [isOpen, handleModalState] = useState(initialState);

  const handleOpenModal = () => {
    handleModalState(true);
  };
  const handleCloseModal = () => {
    handleModalState(false);
  };

  return {
    Modal,
    isOpen,

    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
