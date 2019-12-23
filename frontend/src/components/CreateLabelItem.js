import React from 'react';
//import styles from '../static/css/NoteContent.module.css';
import { 
    Button,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    bin: {
        transform: "scale(0.8)",
    },
    item: {
        padding: 2,
        margin: "auto",
        width: "100%",
    },
    rename: {
        transform: "scale(0.8)",
    },
});

// onClick is is a regular function to reset the map
const CreateLabelItem = ({onClick, onSubmit}) =>  {

    const classes = useStyles();

    return (
        <ListItem className={classes.item}>
            <form 
                autoComplete="off"
                className={classes.form} 
                onSubmit={onSubmit}
            >
                <IconButton className={classes.bin} aria-label="clear">
                    <ClearIcon/>
                </IconButton>
                <TextField 
                    id="standard-basic"
                    label="Create new label"
                    variant="outlined"
                />
                <IconButton className={classes.bin} type="submit" aria-label="submit">
                    <DoneIcon/>
                </IconButton>
            </form>
        </ListItem>
    );
}

export default CreateLabelItem;

                //<Button
                //    className={classes.rename}
                //    type="submit"
                //    label="rename"
                //>Rename</Button>
