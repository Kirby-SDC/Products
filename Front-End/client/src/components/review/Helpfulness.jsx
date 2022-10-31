/* eslint-disable react/function-component-definition */
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { HiOutlineEmojiHappy} from '@react-icons/all-files/hi/HiOutlineEmojiHappy';
import { ImSad} from '@react-icons/all-files/im/ImSad';


const HelpfulDiv = styled.div`{
  white-space : nowrap;
}`;

const HelpfulClick = styled.div`{
  display : inline-block;

}`;

const HelpfulYesNo = styled.span `{
  &:hover {
    cursor:pointer
  }
}`;
const Helpfulness = ({ review, help }) => {
  // This state is only temporarily - need to implement storing the results permanently
  const [helpfulness, setHelpfulness] = useState({ yes: help, no: Math.floor(Math.random() * 100) });
  const [clicked, setClicked] = useState(false);
  const [yesClick, setYesClick] = useState(false);
  const [hideClick, setHideClick] = useState(true);
  const [noClick, setNoClick] = useState(false);

  const handlePut = () => {
    let data = {id: review.review_id}
    axios.put('/reviews', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const yesHandler = () => {
    const temp = { ...helpfulness };
    temp.yes++;
    setHelpfulness(temp);
    setClicked(true);
    handlePut();
    setHideClick(false);
    setYesClick(true);
  };

  const noHandler = (helpfulness) => {
    const temp = { ...helpfulness };
    temp.no++;
    setHelpfulness(temp);
    setClicked(true);
    setHideClick(false);
    setNoClick(true);
  };

  return (
    <HelpfulDiv style={{fontSize:"14px"}} data-testid="helpful-1">
      {'Helpful? '}
      {hideClick &&
      <HelpfulClick disabled={clicked} onClick={() => { yesHandler(helpfulness); }} >
        <span style={{ fontSize:"14px", textDecoration: 'underline', color: '#62929E' }}>{'Yes'}</span>
        <span style={{ fontSize:"14px", color: 'black' }}>
          {` |${helpfulness.yes}|  `}
        </span>
      </HelpfulClick>
      }
      {yesClick &&
        <HiOutlineEmojiHappy style={{color :'green'}}/>
      }
      {hideClick &&
      <HelpfulClick disabled={clicked} onClick={() => { noHandler(helpfulness); }}>
        <span style={{fontSize:"14px", textDecoration:"underline", color: '#62929E'}}>{'No'}</span>
        <span style={{ fontSize:"14px", color: 'black' }}>
          {` |${helpfulness.no}|  `}
        </span>
      </HelpfulClick>
      }
      {noClick &&
        <ImSad style={{color:"red"}}/>
      }
    </HelpfulDiv>
  );
};

export default Helpfulness;
