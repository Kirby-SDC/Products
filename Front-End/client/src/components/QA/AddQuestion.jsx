import React from 'react'
import {PropTypes} from 'prop-types'

const AddQuestion = ({openQModal}) => {
//hooks & handlers
  const handleClick = () => {
    openQModal()
  }
//component
  return (
  <button data-testid ='addQ' className='addQuestion'onClick={handleClick}>Add a Question</button>
  )

}

//propTypes
AddQuestion.propTypes = {

  openQModal: PropTypes.func,

}

export default AddQuestion;