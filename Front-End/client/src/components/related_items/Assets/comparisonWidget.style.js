import styled from 'styled-components';
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight'
import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft'
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus'




export const RelatedBlockContainer = styled.div`
// background-color: #F4F4F9;
position: relative;
display: flex;
align-items: center;
width: 90%;
height: 500px;
`;


export const RelatedCardGraphic = styled.div`
display: inline-block;
height: 450px;
width: 300px;
margin-left: 1em;
margin-right: 1em;
justify-content: space-between;
border-radius: 18px;
background: linear-gradient(to left top, #62929E 30%, #546A7B);
box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
position: relative;
border: solid 1px #F4F4F9;
transition: transform 500ms ease;
&:hover{
  transform: scale(1.1);
}
`;

export const ImageOnCard = styled.div`
height: 70%;
width: 100%;
background: url("${(props) => (props.image)}");
background-size: cover;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
`;

export const TextOnCard = styled.div`
grid-area: text;
margin: 0px 0px 0px 10px;
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`//arrow left
cursor: pointer;
color: #546A7B;
font-size: 2em;
left: 0;
position: absolute;
z-index: 10;
&:hover,
&:focus {
  color: #C6C5B9;
}
`;

export const RightArrow = styled(AiOutlineArrowRight)`//arrow right
cursor: pointer;
color: #546A7B;
font-size: 2em;
right: 0;
position: absolute;
&:hover,
&:focus {
  color: #C6C5B9;
}
`;

export const SalePrice = styled.span`
background-color: red;
color: white;
`;

export const PriceStruckthrough = styled.span`
text-decoration: line-through;
`;

export const RelatedActnBttn = styled(AiFillStar)`
color: #C6C5B9;
font-size: 1.5em;
position: absolute;
right: 10px;
top: 5px;
filter:drop-shadow(0px 0px 5px black);
cursor: pointer;
`;

export const ModalWrapper = styled.div`
width: 35vw;
height: 20vh;
box-shadow: 3px 10px 16px black;
display: grid;
grid-template-columns: 1fr;
position: absolute;
z-index: 10;
border-radius: 10px;
bottom: 35em;
padding: 20px;
`;

export const ModalCloseBtn = styled(ImCancelCircle)`
cursor: pointer;
position: absolute;
z-index: 10;
right: -1em;
top: -1em;
width: 2em;
height: 2em;
`;

export const TableModal = styled.table`
text-align: center;
width: 100%;
table-layout: fixed;
`;

export const TableValues = styled.tr`
color: #546A7B;
word-wrap: break-word;
font-size: 1.2em;
`;

export const AddCardBtn = styled(AiOutlinePlus)`
cursor: pointer;
font-size: 3em;
color: #C6C5B9;
`;

export const BtnContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const OuterBtnDiv = styled.div`
position: relative;
height: 450px;
width: 300px;
`;

export const OutfitCardGraphic = styled.span`
cursor: pointer;
display: inline-block;
height: 450px;
width: 300px;
margin-left: 1em;
margin-right: 1em;
justify-content: space-between;
border: solid;
border-color: #F4F4F9;
border-radius: 18px;
background: #62929E;
box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
position: relative;
border: solid 1px #F4F4F9;
`;

export const OutfitBlockContainer = styled.div`
// background-color: #F4F4F9;
position: relative;
display: flex;
flex-direction: row;
width: 90%;
height: 500px;
`;

export const LeftAOutfit = styled(AiOutlineArrowLeft)`
cursor: pointer;
color: #546A7B;
font-size: 2em;
position: absolute;
top: 50%;
z-index: 10;
&:hover,
&:focus {
  color: #C6C5B9;
}
`;

export const RightAOutfit = styled(AiOutlineArrowRight)`
cursor: pointer;
color: #546A7B;
font-size: 2em;
right: 0;
position: absolute;
top: 50%;
z-index: 10;
&:hover,
&:focus {
  color: #C6C5B9;
}
`;

export const StarsContainer = styled.div`
position: relative;
z-index: 15;
left: -310px;
padding: 5px;
`;

export const CloseActnBtn = styled(ImCancelCircle)`
color: #C6C5B9;
font-size: 1.5em;
position: absolute;
right: 5px;
top: 5px;
filter:drop-shadow(0px 0px 5px black);
cursor: pointer;
`;