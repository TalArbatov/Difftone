import './Questionnaire.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createQuestionnaire as createQuestionnaireAction } from '../../actions/questionnaireActions';
import Question from './Question';
import Title from './Title';
import { Button, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const Questionnaire = ({
  createQuestionnaire
}) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const onTitleChange = e => setTitle(e.target.value);
  const submitQuestion = (name, options) => {
    setQuestions([...questions, { name, options }]);
  }
  const handleQuestionnaireCreation = () => {
    createQuestionnaire(title, questions)
  }

  return (
    <Card className="questionnaire-wrapper" variant="outlined">
      <CardContent className="questionnaire-wrapper2" >
        <Typography color="textSecondary" gutterBottom>Create a Questionnaire </Typography>
        <Title onTitleChange={ onTitleChange }/>
        <Question submitQuestion={ (name, options) => submitQuestion(name, options) } questionNum={ questions.length }/>
        <Button variant="contained" color="primary" onClick={ handleQuestionnaireCreation }>Submit</Button>
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  createQuestionnaire: (title, questions) => dispatch(createQuestionnaireAction(title, questions))
});

export default connect(null, mapDispatchToProps)(Questionnaire);
