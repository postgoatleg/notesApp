import React from "react";
import PropTypes from "prop-types";
import { noteType } from "propTypes";
import NotePreview from "./UI/NotePreview/NotePreview";
import styles from "./list.module.css";

const List = ({ notes, selectNote, removeNote }) => (
    <div className={styles.list}>
      {notes.map((note) => (
        <NotePreview note={note} selectNote={selectNote} removeNote={removeNote} key={note.id} />
      ))}
    </div>
  );

List.propTypes = {
  notes: PropTypes.arrayOf(noteType).isRequired,
  selectNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default List;
