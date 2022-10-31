
import React from 'react';

import QuestionList from './QuestionList.jsx';
import {QuestionListStyle} from './assets/styles.js'
import {PropTypes} from 'prop-types'

const QA = ({productID}) => { return (<QuestionList data-testid="QL"productID={productID} /> )};

//propTypes
QA.propTypes = {
  productID: PropTypes.number,
}

export default QA;
