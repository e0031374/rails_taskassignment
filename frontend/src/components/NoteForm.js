import React from 'react';
import styles from '../static/css/NoteForm.module.css';
import { 
    Button,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    Paper,
    TextareaAutosize,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DISPATCH_NOTES} from '../utils/type.js';
import { DispatchContext } from '../utils/context.js'

import LabelChip from './LabelChip';

const useStyles = makeStyles(theme => ({
    root: {
        width: 400,
        margin: "auto",
    },
    title: {
    },
    body: {
    },
    submit: {
    },
}));

const setOnChange = setFunction => e => {
    setFunction(e.target.value);
}

const NoteForm = (props) => {
    const dispatch = React.useContext(DispatchContext);
    const { body, handleSubmit, tags=[], title, setFilterKey } = props;
    const { open, onClose} = props;

    const [localTitle, setTitle] = React.useState(title);
    const [localBody, setBody] = React.useState(body);

    const onChangeTitle = setOnChange(setTitle);
    const onChangeBody = setOnChange(setBody);

    const handleClose = (e) => {
        // this one goes to the parent
        onClose(someValue);
        const newNote = { title: localTitle, body: localBody };
        handleSubmit(dispatch, newNote);
        resetLocalState();
        console.log("form submitted");
    }

    const resetLocalState = () => { 
        setTitle(title); 
        setBody(body); 
    }

    const someValue = undefined; //TODO
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
        handleClose(e);
    }

    return (
        <Dialog className={classes.root} open={open} onClose={handleClose}>
            <form onSubmit={onSubmit}>
                <List>
                    <ListItem>
                        <TextField 
                            fullWidth
                            autoComplete='off'
                            className={classes.title} 
                            label="Title" 
                            name="title" 
                            onChange={onChangeTitle}
                            value={localTitle}
                            variant="filled"
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            autoComplete='off'
                            className={classes.body} 
                            multiline={true}
                            label="Take a note..." 
                            name="body" 
                            onChange={onChangeBody}
                            value={localBody}
                            variant="outlined"
                            fullWidth
                        />
                    </ListItem>
                    <ListItem>
                        <div className={styles.allLabelContainer}>
                            { tags.map( tag => 
                                <div className={styles.labelContainer}>
                                    <LabelChip 
                                        label={tag}
                                        onClick={() => setFilterKey(tag)}
                                    />
                                </div>
                            )}
                        </div>
                        <Button
                            className={classes.submit}
                            type="submit"
                            label="close"
                        >Close</Button>
                    </ListItem>
                </List>
            </form>
        </Dialog>
    );
}

export default NoteForm;
