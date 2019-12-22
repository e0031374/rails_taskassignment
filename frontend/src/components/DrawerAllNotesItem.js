import React from 'react';
//import styles from '../static/css/NoteContent.module.css';
import { 
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Label:LabelIcon } from '@material-ui/icons';

// onClick is is a regular function to reset the map
const DrawerAllNotesItem = ({text, onClick}) => 
    <ListItem button onClick={onClick}>
        <ListItemIcon><LabelIcon></ListItemIcon>
        <ListItemText primary={text}/>
    </ListItem>

export default DrawerAllNotesItem;
