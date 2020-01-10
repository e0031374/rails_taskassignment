//https://www.peterbe.com/plog/how-to-throttle-and-debounce-an-autocomplete-input-in-react
//example on using debounce and passing args in
import React from 'react';
import { 
    InputBase,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';

import styles from '../../static/css/SearchNoteBar.module.css';

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

const setOnChange = setFunction => e => {
    setFunction(e.target.value);
}

const SearchNoteBar = ({ onHandleSearch }) => {
    const classes = useStyles();
    const [localSearchTerm, setSearchTerm] = React.useState("");

    const loadHandleSearch = (e) => onHandleSearch(e.target.value);
    const debouncedHandleSearch = _.debounce(loadHandleSearch, 500, { leading: true, });

    const onChangeTerm = e => {
        //setOnChange(setSearchTerm);
        setSearchTerm(e.target.value);
        debouncedHandleSearch(e);
    }

    return (
    <div className={styles.container}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                className={classes.inputBase}
                placeholder={"Search..."}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onChange={onChangeTerm}
                value={localSearchTerm}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    </div>
    );
};

export default SearchNoteBar;
