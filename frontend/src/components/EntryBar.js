import React from 'react';
import styles from '../static/css/EntryBar.module.css';
import { 
    InputBase,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { NoteAdd } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    search: {
        height: "100%",
        width: "100%",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.25),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.35),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
    },
    inputBase: {
        width: '100%',
    },
}));

const EntryBar = ({ icon:Icon, placeholder}) => {
    const classes = useStyles();

    return (
    <div className={styles.container}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <Icon/>
            </div>
            <InputBase
                className={classes.inputBase}
                placeholder={placeholder}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    </div>
    );
};

export default EntryBar;
