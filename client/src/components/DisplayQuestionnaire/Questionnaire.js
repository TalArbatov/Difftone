import React from 'react';
import { connect } from 'react-redux';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

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
          
          <Card className="display-question-wrapper" key={ qIndex } ariant="outlined">
            <CardContent >
              <h4>#{ qIndex + 1 } {question.name}</h4>
              { question.options.map((option, oIndex) => {
                return (
                  <div key={ oIndex }>
                    <Typography color="textSecondary" gutterBottom>• { option }</Typography>
                  </div>
                );
              }) }
            </CardContent>
          </Card>
        );
      }) }
      </CardContent>
    </Card>
  );
};

// TODO: add PropTypes

export default Questionnaire;