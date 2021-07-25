import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    <div className="option-wrapper">
      <TextField id="outlined-basic" className="option-input" label={ `Enter Option (${ optionsNum + 1 })` } variant="outlined" onChange={ e => setOption(e.target.value) } value={ option }/>
      <Button variant="contained" className="add-option-btn" color="grey" onClick={ handleOptionCreation }>Add</Button>
    </div>
  );
};

Option.propTypes = {
  createOption: PropTypes.func.isRequired,
  optionsNum: PropTypes.number.isRequired
};

 export default Option;