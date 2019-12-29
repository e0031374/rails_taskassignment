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
import { deleteLabel, updateLabel } from '../actions/index.js';
import { DispatchContext, LabelContext } from '../utils/context.js'
import { isDuplicateLabel } from '../utils/index.js'

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
    const initialState = {
        dirty: false,
        error: false,
        helperText: "",
    };
    const [currState, setState] = React.useState(initialState);

    // new label name should not be equivalent to old label name
    const allLabels = React.useContext(LabelContext);
    const isDuplicate = isDuplicateLabel(allLabels);

    const onChangeTag = setOnChange(setTag);

    const classes = useStyles();
    const dispatch = React.useContext(DispatchContext);

    const handleRename = (e) => {
        e.preventDefault();

        if (localTag.toLowerCase() === text.toLowerCase()) {
            setState({ 
                ...currState, 
                helperText: "label is unchanged", 
            });
            return;
        }

        if ((localTag === "") || isDuplicate(localTag)) {
            setState({ 
                ...currState, 
                error: true,
                helperText: "label cannot be blank or a duplicate", 
            });
            return;
        }
        
        updateLabel(dispatch, { ...label, l_name: localTag });
        setState({ 
            ...currState, 
            error: false,
            helperText: "label updated", 
        });
        return;
    }

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
                onSubmit={handleRename}
            >
                <TextField 
                    autoComplete="off"
                    error={currState.error}
                    helperText={currState.helperText}
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
