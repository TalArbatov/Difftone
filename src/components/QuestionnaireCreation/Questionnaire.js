import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createQuestionnaire as createQuestionnaireAction } from '../actions/questionnaireActions';

const Questionnaire = ({
  dummy,
  createQuestionnaire
}) => {
  return (
    <div>
      <button onClick={ createQuestionnaire }>Click me</button>
      <h1>text: { dummy }</h1>
    </div>
  );
}

const mapStateToProps = ({
  questionnaire
}) => ({
  dummy: questionnaire.dummy
});

const mapDispatchToProps = dispatch => ({
  createQuestionnaire: () => dispatch(createQuestionnaireAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);