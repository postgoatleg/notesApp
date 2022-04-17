import React from 'react';
import PropTypes from 'prop-types'
import classes from './InputNote.module.css';

const InputNote = ({updateText, value}) => {
    const onChange = e => {
      updateText(e.target.value)
    }

    return (
      <textarea className={classes.input} value={value} onChange={onChange} />
    );
};

InputNote.propTypes = {
    value: PropTypes.string.isRequired,
    updateText: PropTypes.func.isRequired,
}

export default InputNote;
