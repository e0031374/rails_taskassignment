import React from 'react';
import { 
    InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from '../static/css/SearchNoteBar.module.css';

import EntryBar from './EntryBar';

const SearchNoteBar = (props) => {
    return (
        <div className={styles.container}>
            <EntryBar {...props} placeholder="Search..." icon={SearchIcon}/>
        </div>
    );
};

export default SearchNoteBar;
