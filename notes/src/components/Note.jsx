import React from 'react';
import InputNote from './UI/input/InputNote';
import styles from './styles/Note.module.css';
const Note = (props, change) => {
    console.log("Note: ",props, change)
    return (
        <div className={styles.Note} onChange={change}>
            <h2>{props.note.title}</h2>
            <InputNote value={props.note.text}/>
        </div>
    );
};

export default Note;