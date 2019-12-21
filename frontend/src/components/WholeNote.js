import React from 'react';

import NoteContent from './NoteContent';
import useNoteFormWrapper from './useNoteFormWrapper';
import NoteForm from './NoteForm';

//const WholeNote = (props) => useNoteFormWrapper(NoteContent);


const WholeNote = (props) => {
    const {noteContent} = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => { console.log("..."); setOpen(true);};
    const handleClose = () => setOpen(false);

    return (
        <div>
            <NoteContent onClick={handleOpen} {...noteContent}/>
            <NoteForm open={open} onClose={handleClose} {...noteContent}/>
        </div>
    );
}


export default WholeNote;
