import React from 'react';

import NoteForm from './NoteForm';

const useNoteFormWrapper = (Component) => (props) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => { console.log("..."); setOpen(true);};
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Component onClick={handleOpen} {...props}/>
            <NoteForm open={open} onClose={handleClose} {...props}/>
        </div>
    );
}


export default useNoteFormWrapper;
