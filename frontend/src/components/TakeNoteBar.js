import React from 'react';
import styles from '../static/css/TakeNoteBar.module.css';
import { 
    ButtonBase,
    InputBase,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { NoteAdd } from '@material-ui/icons';
import EntryBar from './EntryBar';

const useStyles = makeStyles( theme => ({
    base: {
        width: '100%',
    },
}));

const TakeNoteBar = (props) => {
    const classes = useStyles();
    return (
        <div className={styles.container}>
            <ButtonBase className={classes.base} onClick={props.onClick}>
                <EntryBar {...props} placeholder="Take a note..." icon={NoteAdd}/>
            </ButtonBase>
        </div>
    );
};

export default TakeNoteBar;
