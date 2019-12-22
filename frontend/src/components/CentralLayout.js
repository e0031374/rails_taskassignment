import React from 'react';

import {BASE_COLOUR} from '../static/colorConstants';
import styles from '../static/css/CentralLayout.module.css';

import NoteLayout from './NoteLayout';
import TakeNoteBarOuter from './TakeNoteBarOuter';

const CentralLayout = (props) => {

    return (
        <div className={styles.container} style={backgroundColorStyle}>
            <TakeNoteBarOuter />
            <NoteLayout {...props} />
        </div>
    );
}

const backgroundColorStyle = {
    backgroundColor: BASE_COLOUR,
}

export default CentralLayout;
