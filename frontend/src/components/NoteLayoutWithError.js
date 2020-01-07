import React from 'react';

import NoteLayout from './NoteLayout';
import '../static/css/NoteLayoutWithError.css';

const ErrorMessage = (props) =>
    <div className="container" >
        <p className="text" >Error Connecting To Server</p>
    </div>


const withErrorHandling = (Component) => ({ error, ...rest }) => {
    console.log("is error: " + error);
    return (
    error
        ? <ErrorMessage {...rest} />
        : <Component {...rest}/>
    );
}

const NoteLayoutWithError = withErrorHandling(NoteLayout);


export default NoteLayoutWithError;
