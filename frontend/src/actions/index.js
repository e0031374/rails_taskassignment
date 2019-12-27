import { 
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE,
    SYNC_NOTE,
    ADD_TAG,
    DELETE_TAG,
    UPDATE_TAG,
    SYNC_TAG,
    DISPATCH_LABELS,
    DISPATCH_NOTES,
} from '../utils/type.js';

import { 
    API_URL, 
    LABEL_BASE, 
    TASK_BASE 
}  from '../constants.js';

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

export const syncNotesWithDatabase = (dispatch) => {
    const taskUrl = API_URL[TASK_BASE];
    fetch(taskUrl)
        .then(response => response.json())
        .then(response => {
            const action = {
                type: SYNC_NOTE,
                payload: response.data,
            };
            dispatch[DISPATCH_NOTES](action)
        });
}


export const syncLabelsWithDatabase = (dispatch) => {
    const labelUrl = API_URL[LABEL_BASE];
    fetch(labelUrl)
        .then(response => response.json())
        .then(response => {
            const action = {
                type: SYNC_TAG,
                payload: response.data,
            };
            dispatch[DISPATCH_LABELS](action)
        });
}

export const syncWithDatabase = (dispatch) => {
    syncNotesWithDatabase(dispatch);
    syncLabelsWithDatabase(dispatch);
}
