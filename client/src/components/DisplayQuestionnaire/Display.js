import './Display.css';
import React, { useEffect, useState } from 'react';
import Questionnaires from './Questionnaires';
import axios from 'axios';

// TODO: handle proptypes
const Display = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  useEffect(() => {
    axios.get('/questionnaire').then(res => {
      setQuestionnaires(res.data);
    })
  }, [])
  return (
    <div className="display-wrapper">
      <Questionnaires questionnaires={ questionnaires || [] }/>
    </div>
  );
};

// TODO: add PropTypes

// const mapStateToProps = ({ questionnaire }) => ({
//   questionnaires: questionnaire.questionnaires
// });

export default Display;