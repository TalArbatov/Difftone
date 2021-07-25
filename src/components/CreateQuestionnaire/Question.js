import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Question = ({
  submitQuestion,
  questionNum
}) => {
  const [name, setName] = useState('');
  const [options, setOptions] = useState([]);

  console.log(name, options);

  const handleQuestionSubmition = () => {
    submitQuestion(name, options);
    setName('');
    setOptions([]);
  };
  return (
    <div> 
      <label>Enter Question Name ({ questionNum + 1 }):</label>
      <input type="text" onChange={ e => setName(e.target.value) } value={ name }></input>
      <br />
      {/* <button onClick={ () => setOptions({ ...options.options, amount: options.amount + 1 }) }>add option</button> */}
      <Option createOption={ option => setOptions([...options, option]) } optionsNum={ options.length }/>
      <button onClick={ () => handleQuestionSubmition() }>Submit question</button>
    </div>
  );
};

Question.propTypes = {
  submitQuestion: PropTypes.func.isRequired,
  questionNum: PropTypes.number.isRequired
};

 export default Question;