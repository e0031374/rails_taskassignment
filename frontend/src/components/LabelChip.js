import React from 'react';
import { Chip } from '@material-ui/core';

const handleDelete = () => console.log("TODO delete");
const LabelChip = (props) => {
    const {label} = props;
    return (
        <Chip variant="outlined" label={label} color="secondary" size="small" onDelete={handleDelete} />
    );
}

export default LabelChip;
