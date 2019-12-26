import { 
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE,
    ADD_TAG,
    DELETE_TAG,
    UPDATE_TAG,
    DISPATCH_LABELS,
    DISPATCH_NOTES,
} from '../utils/type.js';

// actions do your api fetch
// Component (NoteForm) -> Action (here) -> Component (StageOne, setNote) 
//      -> Reducer (counter) -> FETCH -> Component (StageOne, setNote)
export const fetchToAddNote = (dispatch, { title, body }) => {
    //call Dispatch
    const action = {
        type: ADD_NOTE,
        payload: {
            title,
            body,
        },
    };
    // FETCH here in real life
    dispatch[DISPATCH_NOTES](action);
}

export const fetchToUpdateNote = (dispatch, { title, body }) => {
    const action = {
        type: UPDATE_NOTE,
        payload: {
        },
    };
    dispatch[DISPATCH_NOTES](action);
}
