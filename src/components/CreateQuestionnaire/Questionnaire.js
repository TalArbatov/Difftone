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
  const [message, setMessage] = useState({ active: false, content: '' })
  const onTitleChange = e => setTitle(e.target.value);
  const submitQuestion = (name, options) => {
    setQuestions([...questions, { name, options }]);
  }
  const handleQuestionnaireCreation = () => {
    setMessage({ active: true, content: 'Questionnaire submitted succesfully!' });
    createQuestionnaire(title, questions)
  }

  return (
    <Card className="questionnaire-wrapper" variant="outlined">
      <CardContent className="questionnaire-wrapper2" >
        { !message.active ? (
          <>
            <Typography color="textSecondary" gutterBottom>Create a Questionnaire </Typography>
            <Title onTitleChange={ onTitleChange }/>
            <Question submitQuestion={ (name, options) => submitQuestion(name, options) } questionNum={ questions.length }/>
            <Button variant="contained" color="primary" onClick={ handleQuestionnaireCreation }>Submit</Button>
          </>
        ) : (
          <p style={ { color: 'green' } }>{ message.content }</p>
        )

        }
        
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  createQuestionnaire: (title, questions) => dispatch(createQuestionnaireAction(title, questions))
});

export default connect(null, mapDispatchToProps)(Questionnaire);
