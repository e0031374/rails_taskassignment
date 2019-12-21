import React from 'react';

import NoteForm from './NoteForm';

// originally planned to be used as a HOC for wrapping a component with NoteForm logic
// due to use of react hooks, im not too sure how to restructure this at this point in time

//const useNoteFormWrapper = (Component) => (props) => {
////function useNoteFormWrapper(Component) {
//
//
//    const [open, setOpen] = React.useState(false);
//
//    const handleOpen = () => { console.log("..."); setOpen(true);};
//    const handleClose = () => setOpen(false);
//
//    return (
//        <div>
//            <Component onClick={handleOpen} {...props}/>
//            <NoteForm open={open} onClose={handleClose} {...props}/>
//        </div>
//    );
//}


//export default useNoteFormWrapper;
