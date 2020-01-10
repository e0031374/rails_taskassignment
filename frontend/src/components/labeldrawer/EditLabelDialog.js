import React from 'react';

import { 
    Button,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CreateLabelItem from './CreateLabelItem.js';
import EditLabelItem from './EditLabelItem.js';

const useStyles = makeStyles({
    list: {
        padding: 2,
    },
});

const EditLabelDialog = ({labels, onClose, open}) => {
    const classes = useStyles();

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Edit Labels</DialogTitle>
            <List>
                <CreateLabelItem labels={labels} />
                {labels.map(label =>
                    <EditLabelItem 
                        key={label.id}
                        label={label} 
                    />
                )}
            </List>
            <ListItem>

            </ListItem>
            <Button
                label="done"
                onClick={onClose}
            >Done</Button>
        </Dialog>
    );
}

export default EditLabelDialog;
