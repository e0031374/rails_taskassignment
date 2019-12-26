import React from 'react';
//import styles from '../static/css/NoteContent.module.css';
import { 
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HIGHLIGHT_COLOUR } from '../static/colorConstants.js';

const useStyles = makeStyles({
    listitem: {
        color: HIGHLIGHT_COLOUR,
        fontWeight: "550",
    },
    icon: {
    },
});

// 1. for AllNotes, just pass a regular reset() function
// 2. for the labels before you pass onClick in, it should be produced by a Higher order Function given text
// onClick should be a higher order function, use text for the label text, and the function
// when called should filter available notes

const LabelDrawerItem = ({icon:Icon, text, onClick}) => {

    const classes = useStyles();
    const primaryTypo = 
        <Typography
            className={classes.listitem}
        >{text}</Typography>

    return (
        <ListItem button className={classes.icon} onClick={onClick}>
            <ListItemIcon><Icon/></ListItemIcon>
            <ListItemText 
                disableTypography
                primary={primaryTypo}
            />
        </ListItem>
    );
}

export default LabelDrawerItem;
