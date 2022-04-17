import React from "react";
import PropTypes from "prop-types";
import { noteType } from "propTypes";
import styles from "./NotePreview.module.css";

const NotePreview = ({ note, selectNote, removeNote }) => {
  const handleSelectNoteOnClick = () => {
    selectNote(note.id);
  };

  const handleRemoveNoteOnClick = () => {
    removeNote(note.id);
  };
  return (
    <div className={styles.preview} onClick={handleSelectNoteOnClick}>
      <div className={styles.noteInformation}>
        <h2 className={styles.titlePreview}>{note.title}</h2>
        <p className={styles.textPreview}>{note.text}</p>
      </div>
      <div className={styles.remove} onClick={handleRemoveNoteOnClick}>X</div>
    </div>
  );
};

NotePreview.propTypes = {
  note: noteType.isRequired,
  selectNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default NotePreview;
