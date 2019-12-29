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

import axios from 'axios';

// actions do your api fetch
// Component (NoteForm) -> Action (here) -> Component (StageOne, setNote) 
//      -> Reducer (counter) -> FETCH -> Component (StageOne, setNote)

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function handleInternalErrors(data) {
    if (data.status !== "SUCCESS") {
        console.log(data);
        throw Error(data.message);
    }
    return data;
}

export const fetchToAddNote = async (dispatch, { title, body }) => {
    const taskUrl = API_URL[TASK_BASE];
    const noteToPost = { title, body };
    await fetch(taskUrl, {
        method: 'POST',
        body: JSON.stringify(noteToPost),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(handleErrors)
    .then(response => response.json())
    .then(handleInternalErrors)
    .then(data => console.log(data))
    //.then(response => {
    //    const action = {
    //        type: ADD_NOTE,
    //        payload: response.data,
    //    };
    //    dispatch[DISPATCH_NOTES](action)
    //}).then(data => console.log(data))
    .catch(err => console.log(err));
    syncNotesWithDatabase(dispatch);
}

export const updateNote = (dispatch, { id, title, body }) => {
    const noteUrl = API_URL[TASK_BASE] + `/${id}`;
    console.log(noteUrl);
    axios.patch(noteUrl, { title, body })
        .then( () => syncNotesWithDatabase(dispatch))
        .catch(data => console.log(data));
}

export const deleteNote = (dispatch, id) => {
    const noteUrl = API_URL[TASK_BASE] + `/${id}`;
    console.log(noteUrl);
    axios.delete(noteUrl)
        .then( () => syncNotesWithDatabase(dispatch))
        .catch(data => console.log(data));
}

export const addLabel = (dispatch, { l_name }) => {
    const labelUrl = API_URL[LABEL_BASE];
    const postPayload = { l_name };
    console.log(labelUrl);
    axios.post(labelUrl,postPayload)
        .then(console.log("fine"))
        .then( () => syncLabelsWithDatabase(dispatch))
        .catch(data => console.log(data))
}

export const deleteLabel = (dispatch, id) => {
    const labelUrl = API_URL[LABEL_BASE] + `/${id}`;
    console.log(labelUrl);
    axios.delete(labelUrl)
        .then( () => syncWithDatabase(dispatch))
        .catch(data => console.log(data));
}

export const updateLabel = (dispatch, { id, l_name }) => {
    const labelUrl = API_URL[LABEL_BASE] + `/${id}`;
    console.log(labelUrl);
    axios.patch(labelUrl, { l_name })
        .then(() => syncWithDatabase(dispatch))
        .catch(data => console.log(data));
}

//const isResponseOk = (response)


export const syncNotesWithDatabase = (dispatch) => {
    const taskUrl = API_URL[TASK_BASE];
    //const check = await fetch(taskUrl)
    //console.log(check);
    fetch(taskUrl)
        .then(handleErrors)
        //.then( response => console.log("ok"))
        .then(response => response.json())
        .then(response => {
            const action = {
                type: SYNC_NOTE,
                payload: response.data,
            };
            dispatch[DISPATCH_NOTES](action)
        }).catch( error => console.log(error))
}


export const syncLabelsWithDatabase = (dispatch) => {
    const labelUrl = API_URL[LABEL_BASE];
    fetch(labelUrl)
        .then(handleErrors)
        .then(response => response.json())
        .then(response => {
            const action = {
                type: SYNC_TAG,
                payload: response.data,
            };
            dispatch[DISPATCH_LABELS](action)
        }).catch(error => console.log(error));
}

export const syncWithDatabase = (dispatch) => {
    syncNotesWithDatabase(dispatch);
    syncLabelsWithDatabase(dispatch);
}
