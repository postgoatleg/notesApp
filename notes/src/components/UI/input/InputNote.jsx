import React from 'react';
import classes from './InputNote.module.css';

const InputNote = (props, change) => {
    console.log(props, change);

    return (
        <div>
            <textarea className={classes.input} value={props.value}/>
        </div>
    );
};

export default InputNote;