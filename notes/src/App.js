import './App.css';
import React, {useState} from 'react';

import Note from './components/Note.jsx';
import NotePreview from './components/UI/NotePreview/NotePreview';
import List from './components/list.jsx';


function App() {
    const [notes, setNotes] = useState([
        {title: 'kek', text: 'fsdfsd', id: crypto.randomUUID()},
        {title: 'VVVV', text: 'grgrerpIRe', id: crypto.randomUUID()},
        {title: 'Q#', text: 'FGSGFSGSF', id: crypto.randomUUID()}
    ]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const selectNote = (noteId) => {setSelectedNoteId(noteId)};
    const selectedNote = notes.find(item => item.id == selectedNoteId);
    console.log(selectedNote);
    const updateText = () => {alert("test")};
  return (
    <div className="App">
        <List notes={notes} selectNote={selectNote}></List>
        {selectedNote && <Note note={selectedNote} change={updateText}/>}
    </div>
  );
}

export default App;
