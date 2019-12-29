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
import { fetchToAddLabel } from '../actions/index.js';
import { DispatchContext, LabelContext } from '../utils/context.js'

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

const setOnChange = setFunction => e => {
    setFunction(e.target.value);
}

// onClick is is a regular function to reset the map
const CreateLabelItem = ({onClick}) =>  {
    // TODO make sure onSubmit ensures length is > 1
    const [localTag, setTag] = React.useState("");
    const [isError, setError] = React.useState(false);
    const helperText = "label cannot be blank or a duplicate"
    const setLocalTag = setOnChange(setTag);
    const allLabels = React.useContext(LabelContext);

    // new label name should not be equivalent to old label name
    const isDuplicate = (tagName) => allLabels.some(label => label.l_name.toLowerCase() === tagName.toLowerCase() );

    const dispatch = React.useContext(DispatchContext);
    const onSubmit = (e) => {
        // verify label, pass close in here to close this
        e.preventDefault();

        if((localTag === "") || isDuplicate(localTag)) {
            setError(true);
            return;
        }

        setError(false);
        const tagToPost = { l_name: localTag };
        fetchToAddLabel(dispatch, tagToPost);
    }

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
                    label="Create new label"
                    error={isError}
                    onChange={setLocalTag}
                    helperText={ isError ? helperText : ""}
                    value={localTag}
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
