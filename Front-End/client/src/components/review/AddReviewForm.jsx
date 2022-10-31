/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { CloudinaryContext, Image } from 'cloudinary-react';
import StarRating from './StarRating.jsx';
import Characteristics from './Characteristics.jsx';
import { fetchPhotos, openUploadWidget } from './CloudinaryService';

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
  z-index: 1;
}`;

const ModalContainer = styled.div`{
  button {
    border:none;
  }
  .upload {
    border:solid;
  }
  width: 500px;
  height: 800px;
  border-radius: 12px;
  background-color: #F4F4F9;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  overflow: scroll;
  overflow-x: hidden;
  z-index: -1;
  ::-webkit-scrollbar {
    width: 10px;
    background: white;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border: 1px solid #808080;
    border-radius: 10px;
    width: 10px;
  }
}`;

const InputBody = styled.input`{
   height: 50px;
   width: 100%;
}`;

const SelectButton = styled.button`{
  font-size: 1.5em;
  background-color: white;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #62929E;
  border-radius: 50px;
  box-shadow: 5px 5px 10px;
  &:hover {
    background-color:  #546A7B
  }
}`;

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
`;

const AddReviewForm = ({
  setAddReviewToggle, addReviewToggle, productName, productId, metaData,
}) => {
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [size, setSize] = useState(0);
  const [fit, setFit] = useState(0);
  const [summaryText, setSummaryText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [bodyLength, setBodyLength] = useState(0);
  const [bodyLengthLeft, setBodyLengthLeft] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [starRating, setRating] = useState(0);
  const [recommendValue, setRecommendValue] = useState(false);
  const [images, setImages] = useState([]);


  useEffect(() => {
    setBodyLength(bodyText.length);
  }, [bodyText]);

  useEffect(() => {
    setBodyLengthLeft(50 - bodyLength);
  }, [bodyLength]);

  useEffect(() => {
    fetchPhotos('image', setImages);
  }, []);

  const submitNewReview = (formData) => {
    // { params: { product_id: product.id, sort: sortParameter } }
    axios.post('/reviews', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getIds = () => {
    const characteristicsObject = {};
    for (const key in metaData.characteristics) {
      characteristicsObject[key.toLowerCase()] = metaData.characteristics[key].id;
    }
    return characteristicsObject;
  };

  const Submit = () => {
    const ids = getIds();
    const formData = {
      product_id: productId,
      rating: starRating,
      summary: summaryText,
      body: bodyText,
      recommend: recommendValue,
      name: userName,
      email: userEmail,
      photos: images,
      characteristics: {},
    };
    const objectOfCharacteristics = {
      width,
      comfort,
      quality,
      fit,
      size,
      length,
    };
    for (const key in ids) {
      formData.characteristics[ids[key]] = objectOfCharacteristics[key];
    }
    submitNewReview(formData);
  };

  const changeRecommendValue = (value) => {
    if (typeof value === 'string') {
      if (value.toLowerCase() === 'true') {
        setRecommendValue(true);
      }
      if (value.toLowerCase() === 'false') {
        setRecommendValue(false);
      }
    }
  };

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: 'dmmzqckuu',
      tags: [tag],
      uploadPreset: 'fecupload',
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {

        if (photos.event === 'success') {
          setImages([...images, photos.info.url]);
        }
      } else {
        console.log(error);
      }
    });
  };

  return (
    <ModalBackground data-testid="addReview-1" >
        <div style={{backgroundColor: "white", borderColor: "white", borderRadius: "12px", padding: "5px"}}>
      <ModalContainer>
        <CloudinaryContext cloudName="dmmzqckuu">
          <button onClick={() => { setAddReviewToggle(!addReviewToggle); }}>X</button>
          <form>
            <h2>Write Your Review</h2>
            <h3>
              {`About the ${productName}`}
              {' '}
            </h3>
            <p>Overall Rating - Select a Star</p>
            <StarRating required setRating={setRating} rating={starRating} />
            <div onChange={(e) => { changeRecommendValue(e.target.value); }}>
              <p style={{ display: 'inline-block' }}>Do you recommend this product?</p>
              <input required type="radio" value="true" name="recommend" />
              Yes
              <input type="radio" value="false" name="recommend" />
              No
            </div>
            <Characteristics
              metaData={metaData}
              setWidth={setWidth}
              setComfort={setComfort}
              setQuality={setQuality}
              setLength={setLength}
              setSize={setSize}
              setFit={setFit}
              width={width}
              comfort={comfort}
              quality={quality}
              length={length}
              size={size}
              fit={fit}
            />
            <h5>Review Summary</h5>
            <input maxLength="60" onChange={(e) => { setSummaryText(e.target.value); }} type="text" placeholder="Example: Best purchase ever!" />
            <h5>Main Review</h5>
            <div>
              <InputBody required minLength="50" maxLength="1000" onChange={(e) => { setBodyText(e.target.value); }} type="text" placeholder="Why did you like the product or not?" />
              {bodyLengthLeft > 0
          && <p>{`Minimum required characters left: ${bodyLengthLeft}`}</p>}
              {bodyLengthLeft <= 0
          && <p>Minimum Reached</p>}
            </div>
            <h5>User Name</h5>
            <input required maxLength="60" onChange={(e) => { setUserName(e.target.value); }} type="text" placeholder="Example: jackson11!" />
            <p style={{ fontSize: '10px' }}>For privacy reasons, do not use your full name or email address.</p>
            <h5>Email</h5>
            <input required maxLength="60" onChange={(e) => { setUserEmail(e.target.value); }} type="email" placeholder="Example: jackson11@email.com" />
            <p style={{ fontSize: '10px' }}>For privacy reasons, you will not be emailed</p>
            <div>
            {images.length < 5
            && <SelectButton className="upload" type="button" onClick={() => beginUpload()}>Photo Upload</SelectButton>}
            <section>
              {images.map((i) => (
                <Image
                  key="i"
                  height="40px"
                  width="40px"
                  key={i}
                  publicId={i}
                  fetch-format="auto"
                  quality="auto"
                />
              ))}
            </section>
            <SelectButton className="upload" type="submit" onClick={() => { Submit(); }}>Submit Review</SelectButton>
            </div>
          </form>
        </CloudinaryContext>
      </ModalContainer>
        </div>
    </ModalBackground>
  );
};

export default AddReviewForm;
