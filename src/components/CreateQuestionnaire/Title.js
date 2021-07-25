import React from 'react';
import PropTypes from 'prop-types';

const Title = ({
  onTitleChange
}) => {
  return (
    <div>
      <label>Enter Questionnaire title</label>
      <input type="text" onChange={ onTitleChange }></input>
    </div>
  );
};

Title.propTypes = {
  onTitleChange: PropTypes.func.isRequired
};

 export default Title;