import React from 'react';
import {noteType} from 'propTypes'
import PropTypes from 'prop-types';
import InputNote from './UI/input/InputNote';
import styles from './styles/Note.module.css';

const Note = ({note, updateText, updateTitle}) => {
    const handleTitleChange = (e) => {
        updateTitle(e.target.value)
    }

    return (
        <div className={styles.Note}>
            <input className={styles.titleInput} onChange={handleTitleChange} value={note.title} />
            <InputNote value={note.text} updateText={updateText}/>
        </div>
    )
};

Note.propTypes = {
    note: noteType.isRequired,
    updateText: PropTypes.func.isRequired,
    updateTitle: PropTypes.func.isRequired,
}

export default Note;
