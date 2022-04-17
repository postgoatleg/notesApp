import {useMemo} from 'react'
import * as uuid from 'uuid';
import {useStateFromLocalStorage} from './useStateFromLocalStorage'

export const useNotes = (initialValue) => {
    const [notes, setNotes] = useStateFromLocalStorage('notes', initialValue);
    const [selectedNoteId, setSelectedNoteId] = useStateFromLocalStorage('selectedNoteId', null);
    const selectedNoteIdx = useMemo(() => notes.findIndex(note => note.id === selectedNoteId), [selectedNoteId, notes])
    const selectNote = (noteId) => {setSelectedNoteId(noteId)};
    const selectedNote = selectedNoteIdx > -1 ? notes[selectedNoteIdx] : null;
    const updateText = (newText) => {
      const newNotes = [
        ...notes.slice(0, selectedNoteIdx),
        {
          ...notes[selectedNoteIdx],
          text: newText
        },
        ...notes.slice(selectedNoteIdx + 1),
      ]
      setNotes(newNotes)
    };

    const updateTitle = (newTitle) => {
      const newNotes = [
        ...notes.slice(0, selectedNoteIdx),
        {
          ...notes[selectedNoteIdx],
          title: newTitle
        },
        ...notes.slice(selectedNoteIdx + 1),
      ]
      setNotes(newNotes)
    };

    const addNote = ({title = '', text = ''}) => {
      const newNotes = [
        ...notes,
        {title, text, id: uuid.v4()}
      ]
      setNotes(newNotes)
    };

    const removeNote = (idToDelete) => {
      const newNotes = notes.filter(({id}) => id !== idToDelete)
      setNotes(newNotes)
      
      if (idToDelete === selectedNoteId) {
        setSelectedNoteId(null)
      }
    };

    return {notes, selectNote, selectedNote, updateText, updateTitle, addNote, removeNote}
}