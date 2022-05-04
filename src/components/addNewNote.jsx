import React from "react";
import PropTypes from 'prop-types';
import styles from './addNewNote.module.css';


const AddNewNote = ({setModalActive}) => {

    return (
        <div className={styles.button} onClick={() => setModalActive(true)}>
            <span>+</span>
        </div>
    )
};

AddNewNote.propTypes = {
    setModalActive: PropTypes.func.isRequired,
}

export default AddNewNote
