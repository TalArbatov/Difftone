import React from 'react';
import PropTypes from 'prop-types';
import Questionnaire from './Questionnaire';

const Questionnaires = ({
  questionnaires
}) => {
  
  return (
    <div>
      { questionnaires.map((questionnaire, index) => (
        <Questionnaire key={ index } questionnaire={ questionnaire } />
      )) }
    </div>
  );
};

Questionnaires.prototypes = {
  questionnaires: PropTypes.array.isRequired
};

export default Questionnaires;