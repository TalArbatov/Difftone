import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import TextField from '@material-ui/core/TextField';
import { Button, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
const Question = ({
  submitQuestion,
  questionNum
}) => {
  const [name, setName] = useState('');
  const [options, setOptions] = useState([]);

  const handleQuestionSubmition = () => {
    submitQuestion(name, options);
    setName('');
    setOptions([]);
  };
  
  return (
    <Card className="question-wrapper" variant="outlined">
    <CardContent className="questionnaire-wrapper2" >
      <TextField id="outlined-basic" className="question-input" label={ `Enter Question Name (${ questionNum + 1 })` } variant="outlined" onChange={ e => setName(e.target.value) } value={ name }/>
      <Option createOption={ option => setOptions([...options, option]) } optionsNum={ options.length }/>
      <Button className="add-question-btn" variant="contained" color="primary" onClick={ handleQuestionSubmition }>Add Question</Button>
    </CardContent>
    </Card>
  );
};

Question.propTypes = {
  submitQuestion: PropTypes.func.isRequired,
  questionNum: PropTypes.number.isRequired
};

 export default Question;