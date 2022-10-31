import styled, {createGlobalStyle} from 'styled-components';
import {MdClose} from '@react-icons/all-files/md/MdClose'


const Wrapper = styled.div`

max-height: 50vh;
padding: 5px;
width: auto;
justify-content: top-left;
align-items: center;
overflow-y: scroll;

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}



`
const QListWrapper = styled.div`
overflow-y: scroll;
height: 300px;
width: 100%;

display: flex;
flex-direction: column;


::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
`
const QuestionListStyle = styled.div`
  background: transparent;
  // rgsb(219, 144, 86)
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;


  border: solid;
  border-color: #393D3F;
  border-radius: 20px;
  margin: 50px;
  width: 50%;
  padding: 40px;

  .Title {
    position: relative;
    font-size: 1.25vw;
    margin:15px;
  }

  .loadMore {
    align: center;
    border: solid;
    border-color: #393D3F;
    border-width: 2px;
    border-radius: 50px;
    background: #F4F4F9;
    //rgb(240,177,17)
    white-space: normal !important;
    word-break:break-word;
    font-size: 19px;
    color: #393D3F;
    z-index: 0;
    margin: 5px;
    height: 50px;
    width 200px;
    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }

  .addQuestion{
    border: solid;
    border-color: #393D3F;
    border-radius: 50px;
    background: #F4F4F9;
    color: #393D3F;
    border-width: 2px;
    font-size: 20px;
    margin: 5px;
    height: 50px;
    width 200px;
    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }

  }
`

const HelpfulButton = styled.button`


border: none;
background-color:transparent;
text-align: right;
cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`

const ImagesStyled = styled.img`

width: 5%;
padding-bottom: 20px;
height: auto;
`
const Accordion = styled.div`
.Accordion {
display: flex;
flex-direction: column;
align-items: space-between;
}
background: none;
`

const Questions = styled.div`
// border-top: ridge;
// border-left: ridge;
// border: ridge;
border-radius: 5px;
background: #F4F4F9;
// border-top-left-radius: 5px;
border-color:black;
margin-bottom: 5px;

`

// .attrs(props => ({
//   type: 'text',
//   size: props.small ? 5 : undefined,
// }))
const QuestionFolder = styled.div`

  width: 100%;
  max-height: ${(props) => (props.open ? '25vh' : '0px')};
  transition: all .5s ease-in-out;
  transition-delay: 0ms;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`
const AnswerStyle = styled.span`
display: inline-block;
padding-bottom: 25px;
`
const IndividualQuestionStyle = styled.div`

// border-left: solid;
// border-top: solid
// border-width: 1px;
// border-color: #F4F4F9;
width: auto;
display: flex;
flex-direction: column;
padding-bottom: 30px;
background: transparent;
// border-top-left-radius: ${(props) => (props.selectIndex === '0' ? '5px' : '0px')};
// border-top-right-radius: ${(props) => (props.selectIndex === '0' ? '5px' : '0px')};
// border-bottom-right-radius: ${(props) => (props.selectIndex === '0' ? '5px' : '0px')};
// border-bottom-left-radius: ${(props) => (props.selectIndex === JSON.stringify(props.renderQLength) ? '5px' : '0px')};

.user {
  font-style: italic;
}
.underlined {
  font-size: 1vw;
}
.answer {
  font-size: 1vw;
}
span {
  font-size: 1vw;
}

`
const SearchBarStyle = styled.input`
border-radius: 5px;
flex-wrap: wrap;
width: 500px;
padding: 5px;
background: #F4F4F9;
::placeholder {
  color: black;
}
`
const SearchBarWrapper = styled.div`
padding: 5px;
`

const AnswerWrapper =styled.div`
padding-top: 25px;
padding-bottom: 25px;
padding-left: 10px;
border: solid;
border-color: #393D3F;
`

//modalheader
const AlignRight = styled.span`
float: right;
padding: 5px;
`

const ModalButton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`


const ModalBackground = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
  z-index: 20;
  top: 0;
  left: 0;
}`

const ModalWrapper = styled.div`
  width: 35em;
  height: 35em;
  box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 20;
  border-radius: 5px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 5px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
const ModalForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;

.formSpan {
  width 90%;
  padding: 5px 24px;
  background: #141414;
  color: #fff;
  border: none;
  border-radius: 5px 5px 0% 0%
}

.formInput {
  width: 100%;
  margin-bottom: 25px;
}

.formTextArea {
  height: 100px;
  width: 100%;
  margin-bottom: 25px;
}

.submit {
  margin: 5px;
  cursor: pointer;
  border: solid;
  border-radius: 50px;
  width 50%;
}
.finalSpan {
  margin-bottom: 25px;
}
`
export {Accordion, Questions, QuestionFolder, HelpfulButton, Wrapper, ImagesStyled, AlignRight, AnswerWrapper, AnswerStyle, SearchBarStyle, SearchBarWrapper, ModalButton, ModalBackground, ModalWrapper, ModalContent,CloseModalButton, ModalForm, IndividualQuestionStyle, QuestionListStyle,QListWrapper}