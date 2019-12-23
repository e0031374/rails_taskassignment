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
import LabelIcon from '@material-ui/icons/Label';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    bin: {
        transform: "scale(0.8)",
    },
    item: {
        padding: 2,
    },
    rename: {
        transform: "scale(0.8)",
    },
});

// onClick is is a regular function to reset the map
const EditLabelItem = ({text, onClick, onSubmit}) =>  {

    const classes = useStyles();

    return (
        <ListItem className={classes.item}>
            <IconButton className={classes.bin} aria-lael="delete">
                <DeleteIcon />
            </IconButton>
            <form 
                autoComplete="off"
                className={classes.form} 
                onSubmit={onSubmit}
            >
                <TextField 
                    id="standard-basic"
                />
                <Button
                    className={classes.rename}
                    type="submit"
                    label="rename"
                >Rename</Button>
            </form>
        </ListItem>
    );
}

export default EditLabelItem;
