import {React, useEffect} from "react";
import PropTypes from 'prop-types'
import styles from './addNewNote.module.css';


const AddNewNote = ({addNote, setModalActive}) => {
  const addNoteHandler = () => {
    setModalActive(true);
  }
    return (
        <div className={styles.button} onClick={addNoteHandler}>
            <span>+</span>
        </div>
    )
}

AddNewNote.propTypes = {
    addNote: PropTypes.func.isRequired,
    setModalActive: PropTypes.func.isRequired,
}

export default AddNewNote
