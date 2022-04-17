import React from "react";
import PropTypes from 'prop-types'
import styles from './addNewNote.module.css';

const AddNewNote = ({addNote}) => {
    const addNoteOnClick = async () => {
        try{
            // eslint-disable-next-line no-alert
            const title = await prompt('Назание новой заметки')
            if (title === null || title === '') {
                return
            }
            addNote({title})
        } catch (e) {
            // no action
        }
    }

    return (
        <div className={styles.button} onClick={addNoteOnClick}>
            <span>+</span>
        </div>
    )
}

AddNewNote.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default AddNewNote
