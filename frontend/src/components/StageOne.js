import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../static/css/CentralLayout.module.css';
import { BASE_COLOUR }  from '../static/colorConstants';

import MainLayout from './MainLayout';
import Header from './Header';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: BASE_COLOUR,
        display: "flex",
        height: "100%",
    },
    header: {
       flex: 1,
    },
    mainLayout: {
       flex: 1,
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
    {
        id:7,
        title: "He Who Walks In The Shadow Of Darkness",
        body: "Rising Sun",
        tags: ["Kingsport", "lannisport", "baratheon"],
    },
    {
        id:8,
        title: "",
        body: "Hes king in da norf",
        tags: ["Targeryon", "Lannisport", "Da norf"],
    },
    dummy,
];

const labels = ["Kingsport", "Lannisport", "Innsmouth", "Da Norf", "Sean Bean"];
const hof = (targetLabel) => () => console.log("hof");
const reset = () => console.log("reset");


const StageOne = (props) => {
    const [open, setOpen] = React.useState(true);
    const [applyFilter, setFilter] = React.useState(false);
    const [filterKey, setFilterKey] = React.useState("");
    const notes = noteList;

    const handleDrawerOpen = () => { setOpen(true); };
    const handleDrawerClose = () => { setOpen(false); };
    const classes = useStyles();

    const filterPred = (note) => {
        if (filterKey) {
            return note.tags.map(word => word.toLowerCase())
                    .includes(filterKey.toLowerCase());
        }
        return true;
    }

    return (
        <div className={classes.container}>
            <Header
                className={classes.header}
                handleDrawerOpen={handleDrawerOpen}
                open={open}
            />
            <MainLayout 
                className={classes.mainLayout}
                labels={labels}
                handleDrawerClose={handleDrawerClose}
                notes={notes.filter(filterPred)}
                onClick={hof}
                open={open}
                reset={reset}
                setFilterKey={setFilterKey}
            />
        </div>
    );
}

export default StageOne;
