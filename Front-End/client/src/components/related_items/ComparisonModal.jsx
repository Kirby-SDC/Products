import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {PropTypes} from 'prop-types';
import { ModalWrapper, ModalCloseBtn, TableValues, TableModal, ModalBackground } from './Assets/comparisonWidget.style.js';

const ComparisonModal = function ({ productName, category, features, productId, setProductId, openCompModal }) {
  const [mainProductInfo, setMainProductInfo] = useState({});
  const [joinedFeatures, setJoinedFeatures] = useState([]);


  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then((productInfo) => {
        const data = productInfo.data.features;
        setMainProductInfo(productInfo.data);
        setJoinedFeatures(features.concat(data));
      })
  }, [productId]);

  const joinFeatures = function () {

    let noDups = {};

    return joinedFeatures.map((each, idx) => {
    let basicFeature = each.feature;
    let cardFeature = features.find((item) => {return item.feature === basicFeature});
    let mainFeature = mainProductInfo.features.find((item) => {return item.feature === basicFeature});

    if(noDups[basicFeature]) {
      return;
    } else if (cardFeature && mainFeature) {
      noDups[basicFeature] = 1;
      return (
        <TableValues className="table-info" key={idx} >
          <td>{cardFeature.value}</td>
          <td>{basicFeature}</td>
          <td>{mainFeature.value}</td>
        </TableValues>
      )
    } else if (cardFeature) {
      noDups[basicFeature] = 1;
      return (
        <TableValues className="table-info" key={idx} >
          <td>{cardFeature.value}</td>
          <td>{basicFeature}</td>
          <td>-</td>
        </TableValues>
      )
    } else {
      noDups[basicFeature] = 1;
      return (
        <TableValues className="table-info" key={idx} >
          <td>-</td>
          <td>{basicFeature}</td>
          <td>{mainFeature.value}</td>
        </TableValues>
      )
    }
    });
  };


  return (
    <ModalWrapper className="modal-wrapper" >
    <ModalCloseBtn onClick={openCompModal}/>
      <TableModal>
        <caption style={{fontSize: "1.2em", fontWeight: "bold"}} >
          Comparing
        </caption>
        <thead>
          <tr style={{fontSize: "1.2em", whiteSpace: "pre-line"}} >
            <th>{productName}</th>
            <th> CHARACTERISTIC</th>
            <th> {mainProductInfo.name}</th>
          </tr>
        </thead>
        <tbody style={{ whiteSpace: "pre-line"}}>
            {joinFeatures()}
        </tbody>
      </TableModal>

    </ModalWrapper>
  );
};

ComparisonModal.propTypes = {
  productName: PropTypes.string,
  category: PropTypes.string,
  features: PropTypes.array,
  productId: PropTypes.number ,
  setProductId: PropTypes.func,
}

export default ComparisonModal;