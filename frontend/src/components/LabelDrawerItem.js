import React from 'react';
//import styles from '../static/css/NoteContent.module.css';
import { 
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    drawer: {
    },
    drawerPaper: {
    }
});

// 1. for AllNotes, just pass a regular reset() function
// 2. for the labels before you pass onClick in, it should be produced by a Higher order Function given text
// onClick should be a higher order function, use text for the label text, and the function
// when called should filter available notes

const LabelDrawerItem = ({icon:Icon, text, onClick}) => 
    <ListItem button onClick={onClick}>
        <ListItemIcon><Icon/></ListItemIcon>
        <ListItemText primary={text}/>
    </ListItem>

export default LabelDrawerItem;
