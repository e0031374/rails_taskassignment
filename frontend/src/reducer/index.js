import { 
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE,
    DISPATCH_NOTES,
    DISPATCH_LABELS,
 } from '../utils/type.js'


// normally this would be the combine reducer in redux
// single source of truth is in Stage One
export default function (prevState, action) {
    switch (action.type) {
        case ADD_NOTE:
            const fetchReturn = prevState.concat(action.payload);
            return fetchReturn; //addNote(prevState, action.payload);      // state -> state
        case DELETE_NOTE:
            return //deleteNote(prevState, action.payload);
        case UPDATE_NOTE:
            return
        default:
            return prevState;
    }
}

