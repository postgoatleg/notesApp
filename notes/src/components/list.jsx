import React from 'react';
import NotePreview from './UI/NotePreview/NotePreview'
import styles from './list.module.css'
const List = (props) => {
    return (
        <div className={styles.list}>
            {props.notes.map(note => <NotePreview note={note} selectNote={props.selectNote}/>)}
        </div>
    );
};

export default List;