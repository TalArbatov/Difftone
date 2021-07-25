import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Option = ({
  createOption
}) => {
  const [option, setOption] = useState('');
  const handleOptionCreation = () => {
    createOption(option);
    setOption('');
  };
  return (
    <div>
      <label>Enter Option:</label>
      <input type="text" onChange={ e => setOption(e.target.value) } value={ option }></input>
      <button onClick={ handleOptionCreation }>Add</button>
    </div>
  );
};

Option.propTypes = {
  createOption: PropTypes.func.isRequired
};

 export default Option;