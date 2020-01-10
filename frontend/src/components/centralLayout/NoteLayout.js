import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../../static/css/NoteLayout.module.css';

import WholeNote from '../notes/WholeNote';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        direction: "column",
    },
}));

// make three to four columns
const NoteLayout = ({ notes, ...rest }) => {
    const classes = useStyles();
    return (
        <div className={styles.mainContainer}>
            { notes.map(note => 
                <div 
                    className={styles.noteContainer}
                    key={note.id}
                >
                    <WholeNote 
                        key={note.id} 
                        noteContent={note} 
                        {...rest}
                    />
                </div>
            
            )}
        </div>
    );
}

export default NoteLayout;
