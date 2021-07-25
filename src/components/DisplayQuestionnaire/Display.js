import './Display.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Questionnaires from './Questionnaires';

const Display = ({
  questionnaires
}) => {
  console.log(questionnaires)
  return (
    <div className="display-wrapper">
      <Questionnaires questionnaires={ questionnaires }/>
    </div>
  );
};

Display.prototypes = {

};

const mapStateToProps = ({ questionnaire }) => ({
  questionnaires: questionnaire.questionnaires
});
export default connect(mapStateToProps)(Display);