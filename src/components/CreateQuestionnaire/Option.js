import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Option = ({
  createOption,
  optionsNum
}) => {
  const [option, setOption] = useState('');
  const handleOptionCreation = () => {
    createOption(option);
    setOption('');
  };
  return (
    <div>
      <label>Enter Option ({ optionsNum + 1 }):</label>
      <input type="text" onChange={ e => setOption(e.target.value) } value={ option }></input>
      <button onClick={ handleOptionCreation }>Add</button>
    </div>
  );
};

Option.propTypes = {
  createOption: PropTypes.func.isRequired,
  optionsNum: PropTypes.number.isRequired
};

 export default Option;