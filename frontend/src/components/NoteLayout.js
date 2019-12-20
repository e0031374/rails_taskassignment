import React from 'react';
import WholeNote from './WholeNote';
import styles from '../static/css/NoteLayout.module.css';
import { 
    Grid,
    GridList,
    GridListTile,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        direction: "column",
    },
}));


const taglist = [
    "alpha",
    "beta",
    "gamma",
    "delta",
    "epsilon",
    "sigma",
];

const dummy = { id: 99, title: "Kingsport", body: "Home of the Deep Ones worshipping the great old one Cthulhu, served by servants with bulging foreheads. Really gloomy weather.", tags : taglist};

const noteList = [
    {
        id: 1,
        title: "Lannisport",
        body: "Next to casterly rock",
        tags: ["Lannister", "Casterling", "Harbor", "Greyjoy"],
    },
    {
        id: 2,
        title: "Innsmouth",
        body: "Worshipping the Deep Ones",
        tags: ["Cthulhu", "Dagon", "Harbor", "FishHeads"],
    },
    {
        id:3,
        title: "Dunwich",
        body: "the Horrors and that family",
        tags: ["twin", "evil", "necronomicon", "Whatleys"],
    },
    {
        id: 4,
        title: "Winterfell",
        body: "Winter is Coming",
        tags: ["Winter", "Starks", "Direwolf", "Greyjoy"],
    },
    {
        id: 5,
        title: "Wall",
        body: "Sword that guards the realms of men",
        tags: ["Snarks", "Grumpkins", "FreeFolk", "Wall"],
    },
    {
        id:6,
        title: "Kings Landing",
        body: "Red Keep",
        tags: ["Targeryon", "iron throne", "baratheon"],
    },
    dummy,
];

// make three to four columns
const NoteLayout = (props) => {
    const classes = useStyles();
    return (
        <div className={styles.mainContainer}>
            { noteList.map(note => 
                <div className={styles.noteContainer}>
                    <WholeNote key={note.id} noteContent={note} />
                </div>
            
            )}
        </div>
    );
}

export default NoteLayout;
                //<GridList className cols={4}>
                //    { noteList.map(note => 
                //        <GridListTile>
                //            <WholeNote key={note.id} noteContent={note} />
                //        </GridListTile>
                //    
                //    )}
                //</GridList>
        //<div className={styles.container}>
        //    <div className={styles.box}>
        //        <h3>Box One</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Two</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Three</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Three</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box One</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Two</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Three</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //    <div className={styles.box}>
        //        <h3>Box Three</h3>
        //        <p>Lorem Ipsum dolor sit amet, consectuetot adipensir eli</p>
        //    </div>
        //</div>
