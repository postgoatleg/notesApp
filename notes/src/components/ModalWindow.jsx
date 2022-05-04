import {React, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import styles from "./styles/modalWindow.module.css";

const ModalWindow = ({addNote, setActive}) => {

  const [noteName, useNoteName] = useState("");
  const addNoteOnClick = async () => {
    try{
          // eslint-disable-next-line no-alert
          const title = noteName;
          if (title === null || title === '') {

            return
          }
          addNote({title})
          setActive(false);
      } catch (e) {
          // no action
      }
  }

  const useInputHandler = (e) => {
    useNoteName(e.target.value);
  }
  useEffect(() => {
    const audio = new Audio('sounds/nvg_on.mp3');
    console.log(audio);
    audio.play().then(() => "");
  }, []);

  return (
    <div className={styles.modal} onClick={() => setActive(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <p>Enter letter name</p>
        <input onChange={useInputHandler} value={noteName} type="text" className={styles.input}/>
        <button type="button" onClick={addNoteOnClick} className={styles.btn}>Create note</button>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  addNote: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
}

export default ModalWindow;
