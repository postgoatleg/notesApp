import React from 'react';
import * as uuid from 'uuid';
import {useNotes} from './hooks/useNotes'
import Note from './components/Note';
import List from './components/list';
import AddNewNote from './components/addNewNote'
import './App.css';

const initialValue = [
  {title: 'kek', text: 'fsdfsd', id: uuid.v4()},
  {title: 'VVVV', text: 'grgrerpIRe', id: uuid.v4()},
  {title: 'Q#', text: 'FGSGFSGSF', id: uuid.v4()}
]


function App() {
  const {notes, selectNote, selectedNote, updateText, updateTitle, addNote, removeNote} = useNotes(initialValue)

  return (
    <div className="App">
        <List notes={notes} selectNote={selectNote} removeNote={removeNote} />
        {selectedNote && <Note note={selectedNote} updateText={updateText} updateTitle={updateTitle}/>}
        <AddNewNote addNote={addNote} />
    </div>
  );
}

export default App;
