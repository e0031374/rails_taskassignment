import React from 'react';

import NoteContent from './NoteContent';
import useNoteFormWrapper from './useNoteFormWrapper';
import NoteForm from './NoteForm';
import { updateNote } from '../actions/index.js';

//const WholeNote = (props) => useNoteFormWrapper(NoteContent);


const WholeNote = (props) => {
    const {noteContent, setFilterKey} = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <NoteContent 
                onClick={handleOpen} 
                setFilterKey={setFilterKey} 
                {...noteContent}
            />
            <NoteForm 
                handleSubmit={updateNote}
                onClose={handleClose} 
                open={open} 
                setFilterKey={setFilterKey} 
                {...noteContent}
            />
        </div>
    );
}


export default WholeNote;
