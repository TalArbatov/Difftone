import './Display.css';
import React from 'react';
import { connect } from 'react-redux';
import Questionnaires from './Questionnaires';

// TODO: handle proptypes
const Display = ({
  questionnaires
}) => {
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