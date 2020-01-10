import React from 'react';
import { 
    Button,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LabelIcon from '@material-ui/icons/Label';
import EditIcon from '@material-ui/icons/Edit';

import EditLabelDialog from './EditLabelDialog.js';

const EditLabelContainer = ({labels}) => {

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <div>
            <ListItem button onClick={handleClickOpen}>
                <ListItemIcon><EditIcon/></ListItemIcon>
                <ListItemText primary={"Edit Labels"}/>
            </ListItem>
            <EditLabelDialog labels={labels} open={open} onClose={handleClose}/>
        </div>
    );
}


export default EditLabelContainer;
