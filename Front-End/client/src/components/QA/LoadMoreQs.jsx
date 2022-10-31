import React from 'react'
import {PropTypes} from 'prop-types'

const LoadMoreQs = ({loadMore}) => {
//component
  return (
  <button className='loadMore' id='123' onClick={(e) => {loadMore(e)}}> Load More Questions </button>
  )
}

//propTypes
LoadMoreQs.propTypes = {
  loadMore: PropTypes.func,
}

export default LoadMoreQs;