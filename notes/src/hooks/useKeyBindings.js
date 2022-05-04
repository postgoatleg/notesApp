import {useCallback, useEffect, useMemo} from 'react';

export const useKeyBindings = ({ selectedNoteId, removeNote, setModalActive, selectedNoteIdx, selectNote, notes}) => {
  const actions = useMemo(() => ({
      [78] () { // n
          setModalActive(true);
      },
      [88] () { // x
          removeNote(selectedNoteId);
      },
      [38] () { // up arrow

          if(selectedNoteIdx !== -1 && selectedNoteIdx !== 0)
            selectNote(notes[selectedNoteIdx-1].id)
          // selectedNoteIdx++;
      },
      [40] () { // down arrow

          if(selectedNoteIdx !== -1 && selectedNoteIdx !== notes.length-1)
            selectNote(notes[selectedNoteIdx+1].id)
          // selectedNoteIdx--;
      }
  }), [selectedNoteId, removeNote, selectedNoteIdx])
  const handleKeyPress = useCallback((event) => {
    if (event.altKey) {
        actions[event.keyCode]?.()
    }
  }, [actions]);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};
