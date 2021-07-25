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
    console.log('tal2', title, questions);
    createQuestionnaire(title, questions)
  }
  console.log('questions', questions);
  return (
    <Card className="questionnaire-wrapper" variant="outlined">
      <CardContent className="questionnaire-wrapper2" >
        <Typography color="textSecondary" gutterBottom>
            Please enter 
          </Typography>
        <Title onTitleChange={ onTitleChange }/>
        <Question submitQuestion={ (name, options) => submitQuestion(name, options) } questionNum={ questions.length }/>
        {/* <button onClick={ addQuestion }>Add question</button> */}

        <br />
        <Button variant="contained" color="primary" onClick={ handleQuestionnaireCreation }>Submit</Button>
        {/* <h1>title: { title }</h1> */}
      </CardContent>
    </Card>
  );
}

const mapStateToProps = ({
  questionnaire
}) => ({
  // dummy: questionnaire.dummy
});

const mapDispatchToProps = dispatch => ({
  createQuestionnaire: (title, questions) => dispatch(createQuestionnaireAction(title, questions))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);