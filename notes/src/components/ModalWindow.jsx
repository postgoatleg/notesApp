import {React, useEffect, useState} from "react";
import styles from "./styles/modalWindow.module.css";
const ModalWindow = ({addNote, active, setActive}) => {

  const [noteName, useNoteName] = useState("");
  const addNoteOnClick = async () => {
    //window.navigator.vibrate(200);

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

  const inputHandler = (e) => {
    useNoteName(e.target.value);
  }
  useEffect(() => {
    const audio = new Audio('sounds/nvg_on.mp3');
    console.log(audio);
    audio.play();
  }, []);

  return (
    <div className={styles.modal} onClick={() => setActive(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <p>Enter letter name</p>
        <input onChange={inputHandler} value={noteName} type="text" className={styles.input}/>
        <button onClick={addNoteOnClick} className={styles.btn}>Create note</button>
      </div>
    </div>
  );
};

export default ModalWindow;
