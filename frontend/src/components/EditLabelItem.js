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
import { deleteLabel } from '../actions/index.js';
import { DispatchContext, LabelContext } from '../utils/context.js'

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

const setOnChange = setFunction => e => {
    setFunction(e.target.value);
}

// onClick is is a regular function to reset the map
const EditLabelItem = ({label, onClick, onSubmit}) =>  {
    // TODO make sure onSubmit ensures length is > 1
    const { l_name:text, id } = label;
    const [localTag, setTag] = React.useState(text);
    const onChangeTag = setOnChange(setTag);

    const classes = useStyles();
    const dispatch = React.useContext(DispatchContext);

    const handleDelete = (e) => {
        e.preventDefault();
        deleteLabel(dispatch, id);
    }

    return (
        <ListItem className={classes.item}>
            <IconButton 
                aria-label="delete"
                className={classes.bin} 
                onClick={handleDelete}
            >
                <DeleteIcon />
            </IconButton>
            <form 
                className={classes.form} 
                onSubmit={onSubmit}
            >
                <TextField 
                    autoComplete="off"
                    onChange={onChangeTag}
                    value={localTag}
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
