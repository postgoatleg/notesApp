import React, {useState} from 'react';
import * as uuid from 'uuid';
import classNames from 'classnames';
import {useNotes} from './hooks/useNotes'
import {useKeyBindings} from './hooks/useKeyBindings'
import Note from './components/Note';
import List from './components/list';
import AddNewNote from './components/addNewNote'
import ModalWindow from './components/ModalWindow'
import './App.css';

const initialValue = [
  {title: 'Hello!', text: 'This app created with using React. Click on the button at the bottom left to create a note.', id: uuid.v4()}
]

function App() {
  const {notes, selectNote, selectedNote, updateText, updateTitle, addNote, removeNote, selectedNoteId, selectedNoteIdx} = useNotes(initialValue);
  const [modalActive, setModalActive] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useKeyBindings({selectedNoteId, removeNote, setModalActive, selectedNoteIdx, selectNote, notes});
  const btnClass = classNames("App", {'dark': isDark});

  return (
    <div className={btnClass}>
        <List notes={notes} selectNote={selectNote} removeNote={removeNote} />
        {selectedNote && <Note note={selectedNote} updateText={updateText} updateTitle={updateTitle}/>}
        <AddNewNote addNote={addNote} setModalActive={setModalActive} />
        { modalActive && <ModalWindow addNote={addNote} active={modalActive} setActive={setModalActive}/>}
        <label className="checkbox-ios" title="Switch theme">
          <input type="checkbox" className="switchTheme" onChange={(e) => setIsDark(e.target.checked)} />
          <span className="checkbox-ios-switch"/>
        </label>
    </div>
  );
}

export default App;
