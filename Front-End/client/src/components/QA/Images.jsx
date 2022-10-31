import React from 'react'
import {PropTypes} from 'prop-types'
import {ImagesStyled} from './assets/styles.js'
const Images = ({images}) => {

  //component
  return (
    <div>
      {images.map(function(url, index){
        return <ImagesStyled src={`${url.url}`} key={index}></ImagesStyled>
      })}
    </div>
  )

}

//propTypes
Images.propTypes = {
  images: PropTypes.array
}
export default Images;