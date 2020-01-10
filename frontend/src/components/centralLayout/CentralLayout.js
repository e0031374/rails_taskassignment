import React from 'react';

import { BASE_COLOUR } from '../../constants';
import styles from '../../static/css/CentralLayout.module.css';

import NoteLayout from './NoteLayout';
import NoteLayoutWithError from './NoteLayoutWithError';
import TakeNoteBarOuter from './TakeNoteBarOuter';

const CentralLayout = (props) => {
    console.log(props.error);

    return (
        <div className={styles.container} style={backgroundColorStyle}>
            <TakeNoteBarOuter />
            <NoteLayoutWithError {...props}/>
        </div>
    );
}

const backgroundColorStyle = {
    backgroundColor: BASE_COLOUR,
}

export default CentralLayout;
