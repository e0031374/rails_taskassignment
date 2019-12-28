import { 
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE,
    SYNC_NOTE,
    DISPATCH_NOTES,
    DISPATCH_LABELS,
    SYNC_TAG,
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
        case SYNC_NOTE:
            //action.payload.forEach(x => console.log(x));
            return action.payload;
            //return action.payload.map(({ labels, ...rest }) => {
            //    return {
            //        ...rest,
            //        tags: labels.map(label => label.l_name)
            //    }
            //});
        case SYNC_TAG:
            return action.payload; //action.payload.map(label => label.l_name);
        default:
            return prevState;
    }
}

