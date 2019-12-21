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

const NoteForm = (props) => {
    const { title, body, tags=[] } = props;
    const { open, onClose} = props;
    const someValue = undefined; //TODO
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
        handleClose();
    }

    const handleClose = (e) => {
        // this one goes to the parent
        onClose(someValue);
        console.log("form submitted");
    }

    return (
        <Dialog className={classes.root} open={open} onClose={handleClose}>
            <form onSubmit={onSubmit}>
                <List>
                    <ListItem>
                        <TextField 
                            className={classes.title} 
                            label="Title" 
                            name="title" 
                            variant="filled"
                            fullWidth
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            className={classes.body} 
                            multiline={true}
                            label="Take a note..." 
                            name="body" 
                            variant="outlined"
                            fullWidth
                        />
                    </ListItem>
                    <ListItem>
                        <div className={styles.allLabelContainer}>
                            { tags.map( tag => 
                                <div className={styles.labelContainer}>
                                    <LabelChip label={tag}/>
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
