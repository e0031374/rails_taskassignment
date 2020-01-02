import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../static/css/CentralLayout.module.css';
import { BASE_COLOUR }  from '../constants.js';
import { DispatchContext, LabelContext } from '../utils/context.js'

import MainLayout from './MainLayout';
import Header from './Header';
import counter from '../reducer/index.js';
import { syncWithDatabase } from '../actions/index.js';

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
    { id: "51", l_name: "alpha"},
    { id: "52", l_name: "beta"},
    { id: "53", l_name: "gamma"},
    { id: "54", l_name: "delta"},
    { id: "55", l_name: "epsilon"},
    { id: "56", l_name: "sigma"},
];

const dummy = { id: 99, title: "Kingsport", body: "Home of the Deep Ones worshipping the great old one Cthulhu, served by servants with bulging foreheads. Really gloomy weather.", tags : taglist};

const noteList = [
    {
        id: 1,
        title: "Lannisport",
        body: "Next to casterly rock",
        tags: [
            { id: 61, l_name: "Lannister" }, 
            { id: 62, l_name: "Casterling" }, 
            { id: 63, l_name: "Harbor" }, 
            { id: 64, l_name: "Greyjoy" }, 
        ]
    },
    {
        id: 2,
        title: "Innsmouth",
        body: "Worshipping the Deep Ones",
        tags: [
            { id: 61, l_name: "Cthulhu" }, 
            { id: 62, l_name: "Dagon" }, 
            { id: 63, l_name: "Harbor" }, 
            { id: 64, l_name: "FishHeads" }, 
        ]
    },
    {
        id:3,
        title: "Dunwich",
        body: "the Horrors and that family",
        tags: [
            { id: 61, l_name: "twin" }, 
            { id: 62, l_name: "evil" }, 
            { id: 63, l_name: "nerconomicon" }, 
            { id: 64, l_name: "whatleys" }, 
        ],
    },
    {
        id: 4,
        title: "Winterfell",
        body: "Winter is Coming",
        tags: [
            { id: 61, l_name: "winter" }, 
            { id: 62, l_name: "starks" }, 
            { id: 63, l_name: "direwolf" }, 
            { id: 64, l_name: "greyjoy" }, 
        ],
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

const note9 = { id:9, title: "Lee Wai Fong", body: "XONE", tags: [] }

const labelList = ["Kingsport", "Lannisport", "Innsmouth", "Da Norf", "Sean Bean"];

// TODO utils folder with some functions inside
const sync = () => {
    // fetch api here
    return {
        labels: [],
        notes: [],
    };
};


// TODO change label portion to note card => form of labels currently selected and new labels
// TODO delete/edit label portion to the drawer

// given a keyword to filter
// returns a filterPredicate to use in array.filter
const setFilterPred = (filterKey) => (note) => {
    // filterKey is an object { id: X, l_name: "sth" } or false literal
    // used by clicking labelChip or labelDrawerItem or showAllNotes drawer items
    const somePred = (tagObj) => tagObj.id === filterKey.id;
    if (filterKey) {
        return note.labels.some(somePred);
        //return note.tags.map(word => word.toLowerCase())
        //        .includes(filterKey.toLowerCase());
    }
    return true;
}

// action.type = ADD_NOTES, action.payload = { title: body: }
const setDispatch = (prevState, setStateFunction) => action => {
    // counter can be ignored i guess
    setStateFunction(counter(prevState, action));
}

// package these into an object, and send it with context?
const addNote = (prevState, noteToAdd) => {
    // prevState is a list of the previous notes
    //lets assume after we get fetch api
    //shiit we need to fetch again after we post, or we cant
    //get the id
    const fetchReturn = prevState.concat(note9);
    return fetchReturn;
};

const deleteNote = (prevState, id) => {
    const fetchReturn = { id };
    const newNotes = prevState.filter(note => note.id !== id);
    return newNotes;
}

const setSearchPred = (searchKey) => (obj) => {
    console.log(searchKey);
    // default no searchterm
    if (searchKey.length <= 0) return true;
    // searches in both title and body of the ToDo
    const fullObjContent = `${obj.title} ${obj.body}`;
    const lowerCaseSearchKey = searchKey.toLowerCase();
    return fullObjContent.toLowerCase().includes(lowerCaseSearchKey);
}

const StageOne = (props) => {
    // for CSS stuff
    const classes = useStyles();

    // state, source of truth across whole app
    //const [labels, setLabel] = React.useState(labelList);
    //const [notes, setNotes] = React.useState(noteList);
    const [labels, setLabel] = React.useState([]);
    const [notes, setNotes] = React.useState([]);

    // makes REST API calls, should set new state for the above
    const dispatchNotes = setDispatch(notes, setNotes);
    const dispatchLabels = setDispatch(labels, setLabel);
    const DISPATCH = { 
        DISPATCH_LABELS: dispatchLabels,
        DISPATCH_NOTES: dispatchNotes,
    }

    // local state for filtering by labels
    const [filterKey, setFilterKey] = React.useState("");
    const filterPred = setFilterPred(filterKey);

    // local state for filtering by search
    const [searchKey, setSearchKey] = React.useState("");
    const searchPred = setSearchPred(searchKey);

    // state management for Drawer component (where the labels are at)
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => { setOpen(true); };
    const handleDrawerClose = () => { setOpen(false); };

    const handleRefresh = () => syncWithDatabase(DISPATCH);

    React.useEffect(() => {
        // fetch for the first time, like componentDidMount
        handleRefresh();
        //syncWithDatabase(DISPATCH);
        console.log(notes);
    }, []);


    return (
        <div className={classes.container}>
            <Header
                className={classes.header}
                handleDrawerOpen={handleDrawerOpen}
                handleRefresh={handleRefresh}
                onHandleSearch={setSearchKey}
                open={open}
            />
            <DispatchContext.Provider value={DISPATCH}>
            <LabelContext.Provider value={labels}>
                <MainLayout 
                    className={classes.mainLayout}
                    handleDrawerClose={handleDrawerClose}
                    labels={labels}
                    notes={notes.filter(filterPred).filter(searchPred)}
                    open={open}
                    setFilterKey={setFilterKey}
                />
            </LabelContext.Provider>
            </DispatchContext.Provider>
        </div>
    );
}

export default StageOne;
