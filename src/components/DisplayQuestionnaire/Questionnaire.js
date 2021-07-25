import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Questionnaire = ({
  questionnaire
}) => {
  const { title, questions } = questionnaire;
  return (
    <div>
      <p>title: { title }</p>
      { questions.map((question, qIndex) => {
        return(
          <div key={ qIndex }>
            <p>question name: {question.name}</p>
            { question.options.map((option, oIndex) => {
              return (
                <div key={ oIndex }>
                  <p>{oIndex + 1}. {option}</p>
                </div>
              )
            }) }
          </div>
        )
      }) }
    </div>
  );
};

Questionnaire.prototypes = {

};

const mapStateToProps = ({ questionnaire }) => ({
  questionnaires: questionnaire.questionnaires
});

export default connect()(Questionnaire);