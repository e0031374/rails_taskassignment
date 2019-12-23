import React from 'react';
//import styles from '../static/css/NoteContent.module.css';
import { 
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LabelIcon from '@material-ui/icons/Label';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    bin: {
        transform: "scale(0.8)",
    },
    item: {
        padding: 2,
    },
    rename: {
        transform: "scale(0.8)",
    },
});

// onClick is is a regular function to reset the map
const AddLabelItem = ({text, onClick, onSubmit}) =>  {
    const [checkedState, setState] = React.useState(false);

    const handleChange = (event) => { 
        setState( ! checkedState ); 
    };

    const classes = useStyles();

    return (
        <FormControlLabel 
            control={
                <Checkbox 
                    checked={checkedState}
                    onChange={handleChange}
                />
            }
            label={text} 
        />
    );
}

export default AddLabelItem;
