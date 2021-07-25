import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createQuestionnaire as createQuestionnaireAction } from '../../actions/questionnaireActions';
import Question from './Question';
import Title from './Title';
const Questionnaire = ({
  createQuestionnaire
}) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const onTitleChange = e => setTitle(e.target.value);
  const submitQuestion = (name, options) => {
    setQuestions([...questions, { name, options }]);
  }
  console.log('questions', questions);
  return (
    <div>
      <Title onTitleChange={ onTitleChange }/>
      <Question submitQuestion={ (name, options) => submitQuestion(name, options) }/>
      {/* <button onClick={ addQuestion }>Add question</button> */}

      <br />
      <button onClick={ createQuestionnaire }>Submit</button>
      <h1>title: { title }</h1>
    </div>
  );
}

const mapStateToProps = ({
  questionnaire
}) => ({
  // dummy: questionnaire.dummy
});

const mapDispatchToProps = dispatch => ({
  createQuestionnaire: questionnaire => dispatch(createQuestionnaireAction(questionnaire))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);