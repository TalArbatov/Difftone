import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const Questionnaire = ({
  questionnaire
}) => {
  const { title, questions } = questionnaire;
  return (
    <Card className="display-questionnaire-wrapper" variant="outlined">
      <CardContent>
      <h2>{ title }</h2>
      { questions.map((question, qIndex) => {
        return(
          
          <Card className="display-question-wrapper" key={ qIndex } className="display-wrapper" variant="outlined">
            <CardContent >
              <h4>#{ qIndex + 1 } {question.name}</h4>
              { question.options.map((option, oIndex) => {
                return (
                  <div key={ oIndex }>
                    <p>{oIndex + 1}. {option}</p>
                  </div>
                )
              }) }
            </CardContent>
          </Card>
        )
      }) }
      </CardContent>
    </Card>
  );
};

Questionnaire.prototypes = {

};

const mapStateToProps = ({ questionnaire }) => ({
  questionnaires: questionnaire.questionnaires
});

export default connect()(Questionnaire);