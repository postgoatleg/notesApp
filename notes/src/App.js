import React from 'react';
import * as uuid from 'uuid';
import {useNotes} from './hooks/useNotes'
import Note from './components/Note';
import List from './components/list';
import AddNewNote from './components/addNewNote'
import './App.css';

const initialValue = [
  {title: 'Hello!', text: 'This app created with using React. Сlick on the button at the bottom left to create a note.', id: uuid.v4()}
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
