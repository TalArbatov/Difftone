import './Title.css';
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Title = ({
  onTitleChange
}) => {
  return (
    <div className="title-wrapper">
      <TextField id="outlined-basic" label="Enter Questionnaire title" variant="outlined" onChange={ onTitleChange }/>
    </div>
  );
};

Title.propTypes = {
  onTitleChange: PropTypes.func.isRequired
};

 export default Title;