import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Display = ({
  questionnaire
}) => {
  console.log(questionnaire)
  return (
    <div>
      <p></p>
    </div>
  );
};

Display.prototypes = {

};

const mapStateToProps = ({ questionnaire }) => ({
  questionnaire: questionnaire.questionnaire
});
export default connect()(Display);