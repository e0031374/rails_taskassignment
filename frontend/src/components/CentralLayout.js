import React from 'react';
import styles from '../static/css/CentralLayout.module.css';
import { 
    Grid,
    GridList,
    GridListTile,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NoteLayout from './NoteLayout';
import TakeNoteBarOuter from './TakeNoteBarOuter';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        direction: "column",
    },
}));

const CentralLayout = (props) => {

    return (
        <div className={styles.container}>
            <TakeNoteBarOuter />
            <NoteLayout />
        </div>
    );
}

export default CentralLayout;
