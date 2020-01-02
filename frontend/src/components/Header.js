import React from 'react';
import clsx from 'clsx';

import { 
    AppBar,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';

import styles from '../static/css/MainLayout.module.css';
import {TRIM_COLOUR} from '../static/colorConstants.js';

import CentralLayout from './CentralLayout';
import LabelDrawer from './LabelDrawer';
import SearchNoteBar from './SearchNoteBar';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: TRIM_COLOUR,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
     },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    refreshButton: {
        marginLeft: theme.spacing(2),
    },
}));

const Header = ({handleDrawerOpen, handleRefresh, onHandleSearch, open }) => {

    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    Header
                </Typography>
                <SearchNoteBar onHandleSearch={onHandleSearch} />
                <IconButton
                    color="inherit"
                    aria-label="refresh"
                    onClick={handleRefresh}
                    className={classes.refreshButton}
                >
                    <RefreshIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
