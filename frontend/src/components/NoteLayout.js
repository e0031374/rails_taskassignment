import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../static/css/NoteLayout.module.css';

import WholeNote from './WholeNote';

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
        //<div className={styles.container}>
        //    <div className={styles.box}>
        //        <h3>Box One</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Two</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Three</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Three</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box One</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Two</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Three</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Three</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //</div>
