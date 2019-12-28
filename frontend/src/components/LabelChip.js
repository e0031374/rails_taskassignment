import React from 'react';
import { Chip } from '@material-ui/core';

const handleDelete = () => console.log("TODO delete");
const LabelChip = (props) => {
    const {label, setFilterKey} = props;
    const handleClick = () => setFilterKey(label);
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
