import React from 'react';

import { 
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { HIGHLIGHT_COLOUR } from '../../constants.js';

const useStyles = makeStyles({
    listitem: {
        color: HIGHLIGHT_COLOUR,
        fontWeight: "550",
    },
    icon: {
    },
});

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
