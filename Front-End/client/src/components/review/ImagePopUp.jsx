/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
`;
const ModalBackground = styled.div`{
  width: 100%;
  height: 100%;
  background-color: #62929E;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}`;

const ModalContainer = styled.div`{
  width: 800px;
  height: 800px;
  border-radius: 12px;
  background-color: #F4F4F9;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
}`;

const FullImage = styled.img`{
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
  width: auto;
  height: auto;
}`;

const CloseButton = styled.button`{

}`;

const ImagePopUp = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Thumbnail data-testid="image-1"onClick={() => { toggleModal(); }} key={image.id} src={image.url} />
      {isOpen
      // <img onClick ={() => {toggleModal()}} src={image.url}></img>
      && (
      <ModalBackground>
        <ModalContainer>
          <CloseButton onClick={() => { toggleModal(); }}>X</CloseButton>
          <FullImage src={image.url} />
        </ModalContainer>
      </ModalBackground>
      )}
    </>
  );
};

export default ImagePopUp;
