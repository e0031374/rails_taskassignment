import React from 'react';
import { 
    InputBase,
} from '@material-ui/core';

import TakeNoteBar from './TakeNoteBar.js';
import NoteForm from '../notes/NoteForm';
import { addNote } from '../../actions/index.js';

import styles from '../../static/css/TakeNoteBarOuter.module.css';

const TakeNoteBarOuter  = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => { console.log("..."); setOpen(true);};
    const handleClose = () => setOpen(false);

    return (
        <div className={styles.container}>
            <TakeNoteBar onClick={handleOpen} {...props}/>
            <NoteForm 
                body=""
                handleSubmit={addNote}
                open={open} 
                onClose={handleClose} 
                title=""
                {...props}
            />
        </div>
    );
}

export default TakeNoteBarOuter;
