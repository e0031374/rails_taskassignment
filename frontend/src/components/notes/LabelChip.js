import React from 'react';
import { Chip } from '@material-ui/core';
import { removeLabelFromNote } from '../../actions/index.js';
import { DispatchContext } from '../../utils/context.js'

const LabelChip = (props) => {
    const {label, setFilterKey, taskId} = props;
    const handleClick = () => setFilterKey(label);
    const dispatch = React.useContext(DispatchContext);

    const handleDelete = (e) => {
        e.preventDefault();
        const payload = {
            task_id: taskId,
            label_id: label.id,
        };
        //console.log(payload);
        removeLabelFromNote(dispatch, payload);
    }

    return (
        <Chip 
            color="secondary" 
            label={label.l_name} 
            onClick={handleClick} 
            onDelete={handleDelete} 
            size="small" 
            variant="outlined" 
        />
    );
}

export default LabelChip;
