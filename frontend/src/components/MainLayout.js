import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import styles from '../static/css/MainLayout.module.css';
import {BASE_COLOUR} from '../constants';

import CentralLayout from './CentralLayout';
import LabelDrawer from './LabelDrawer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    appBar: {
    //    backgroundColor: TRIM_COLOUR,
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
}));

const MainLayout = ({ open, notes, setFilterKey, ...rest}) => {
    const classes = useStyles();
    return (
        <div className={styles.all} style={backgroundColorStyle}>
            <LabelDrawer 
                open={open} 
                setFilterKey={setFilterKey}
                {...rest}
            />
            <div className={styles.split}/>
            <main 
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <CentralLayout 
                    notes={notes}
                    setFilterKey={setFilterKey}
                />
            </main>
        </div>
    );
};

const backgroundColorStyle = {
    backgroundColor: BASE_COLOUR,
}

export default MainLayout;
