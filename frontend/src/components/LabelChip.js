import React from 'react';
import { Chip } from '@material-ui/core';

const handleDelete = () => console.log("TODO delete");
const LabelChip = (props) => {
    const {label, onClick} = props;
    return (
        <Chip 
            color="secondary" 
            label={label} 
            onClick={onClick} 
            onDelete={handleDelete} 
            size="small" 
            variant="outlined" 
        />
    );
}

export default LabelChip;
