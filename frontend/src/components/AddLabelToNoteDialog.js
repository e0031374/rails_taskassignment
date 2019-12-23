// credits to this post
// https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function
import React from 'react';
//import styles from '../static/css/NoteContent.module.css';
import { 
    Button,
    Dialog,
    DialogTitle,
    FormGroup,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LabelIcon from '@material-ui/icons/Label';
import AddLabelItem from './AddLabelItem.js';
import { LabelContext } from '../utils/context.js'

const useStyles = makeStyles({
    form: {
        paddingLeft: 15,
    },
    list: {
        padding: 2,
    },
});

const AddLabelToNoteDialog = ({noteLabels}) => {
    const allLabels = React.useContext(LabelContext);
    const classes = useStyles();
    const labels = allLabels.filter(x => !noteLabels.includes(x));

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <div>
            <IconButton 
                className={classes.bin} 
                aria-lael="label" 
                size="small"
                onClick={handleClickOpen}
            >
                <LabelIcon />
            </IconButton>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Label Note</DialogTitle>
                <FormGroup className={classes.form}>
                    {labels.map(label =>
                        <AddLabelItem text={label}/>
                    )}
                </FormGroup>
                <ListItem>

                </ListItem>
            </Dialog>
        </div>
    );
}

export default AddLabelToNoteDialog;
