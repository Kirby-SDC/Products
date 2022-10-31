import React from 'react'
import {PropTypes} from 'prop-types'
import {HelpfulButton} from './assets/styles.js'

const {useState} = React

const Report = ({reportOnclick}) => {

  //component
  return (
   <HelpfulButton onClick={reportOnclick}><u className='underlined'>Report</u></HelpfulButton>
  )

}

//proptype
Report.propTypes = {
  reportOnclick: PropTypes.func
}

export default Report;
