import React from 'react';
import styles from './NotePreview.module.css'
const NotePreview = (props) => {
    const selectNote = () => {
        props.selectNote(props.note.id);
    }
    return (
        <div className={styles.preview} onClick={selectNote}>
            <h2>{props.note.title}</h2>
            <p className={styles.textPreview}>{props.note.text}</p>
        </div>
    );
};

export default NotePreview;