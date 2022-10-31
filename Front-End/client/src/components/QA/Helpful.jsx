import React from 'react'
import {PropTypes} from 'prop-types'
import {HelpfulButton} from './assets/styles.js'
import axios from 'axios'
import Report from './Report.jsx'
const {useState} = React;

//handlers
const Helpful = ({currentQ, helpfulCount, id, helpfulHandler, reportHandler}) => {
  const [helpful, setHelpful] = useState(helpfulCount)
  const [voted, setVoted] = useState(true);

  const helpfulOnclick = () => {
    helpfulHandler(id)
    setVoted(false)
    setHelpful(helpful+1)
  }

  const reportOnclick = () => {
    reportHandler(id)
  }

//component
return (

  <span> {`Helpful? | `}
    <HelpfulButton>
    { voted ? <u className='underlined' onClick={helpfulOnclick}>Yes</u> : <u className='underlined'>Already Voted</u>}
    </HelpfulButton>
    {`${helpful} | `}
    <Report reportOnclick={reportOnclick}/>
  </span>

)
}

//proptypes
Helpful.propTypes = {
  helpfulCount  : PropTypes.number,
  id: PropTypes.number,
  helpfulHandler: PropTypes.func,
  reportHandler: PropTypes.func,
  currentQ: PropTypes.object
}

export default Helpful