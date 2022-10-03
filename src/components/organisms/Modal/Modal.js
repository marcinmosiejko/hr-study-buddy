import { Button } from 'components/atoms/Button/Button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, BackgroundOverlay } from './Modal.styles';

const modalContainer = document.querySelector('#modal-container');

const Modal = ({ handleCloseModal, children }) => {
  const modalElement = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalElement);

    return () => {
      modalContainer.removeChild(modalElement);
    };
  }, [modalElement]);

  return ReactDOM.createPortal(
    <>
      <BackgroundOverlay onClick={handleCloseModal} />
      <Wrapper>
        {children}
        <Button onClick={handleCloseModal}>Close</Button>
      </Wrapper>
    </>,
    modalElement
  );
};

export default Modal;
