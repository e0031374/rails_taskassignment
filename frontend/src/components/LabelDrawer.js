import React from 'react';

import { 
    Divider,
    Drawer,
    List,
    IconButton,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LabelIcon from '@material-ui/icons/Label';
import LightBulbIcon from '@material-ui/icons/EmojiObjects';
import ChevronLeftIcon from '@material-ui/icons/MenuOpen';

import styles from '../static/css/NoteContent.module.css';
import { TRIM_COLOUR } from '../static/colorConstants';
import LabelDrawerItem from './LabelDrawerItem.js';
//import { 
//    Label:LabelIcon, 
//    EmojiObjects:LightBulbIcon, 
//    MenuOpen:ChevronLeftIcon,
//} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles( theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: TRIM_COLOUR,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0,1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));



const LabelDrawer = ({
    handleDrawerClose, 
    labels=[], 
    open, 
    reset,
    setFilterKey,
}) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
        >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
        </div>
        <Divider/>
            <LabelDrawerItem 
                icon={LightBulbIcon} 
                text="Notes" 
                onClick={() => setFilterKey(false)}
            />
        <Divider/>
        <List>
            {labels.map(label => 
                <LabelDrawerItem 
                    icon={LabelIcon} 
                    text={label} 
                    onClick={() => setFilterKey(label)}
                />
            )}
        </List>
        </Drawer>
    );
}

export default LabelDrawer;
