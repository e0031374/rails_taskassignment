import React from 'react';
import styles from '../static/css/TakeNoteBarOuter.module.css';
import { 
    InputBase,
} from '@material-ui/core';
import TakeNoteBar from './TakeNoteBar.js';
import NoteForm from './NoteForm';

//import useNoteFormWrapper from './useNoteFormWrapper';

//const TakeNoteBarOuter = useNoteFormWrapper(TakeNoteBar);

//const TakeNoteBarOuter = (props) => {
//    return (
//        <div className={styles.container}>
//            <div className={styles.subContainer}>
//                <TakeNoteBar/>
//            </div>
//        </div>
//    );
//}
const TakeNoteBarOuter  = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => { console.log("..."); setOpen(true);};
    const handleClose = () => setOpen(false);

    return (
        <div className={styles.container}>
            <TakeNoteBar onClick={handleOpen} {...props}/>
            <NoteForm open={open} onClose={handleClose} {...props}/>
        </div>
    );
}

export default TakeNoteBarOuter;
