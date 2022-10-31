import React from 'react'
import {PropTypes} from 'prop-types'

const AddAnswer = ({openAModal}) => {

  const handleClick = () => {
    openAModal()
  }

  return (
    <button onClick={(e)=>{handleClick(e)}}>Add Answer</button>
  )
}

//propTypes
AddAnswer.propTypes = {

  openAModal: PropTypes.func,

}

export default AddAnswer