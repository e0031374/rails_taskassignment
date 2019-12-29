import React from 'react';
import styles from '../static/css/NoteContent.module.css';
import { 
    Card, 
    CardActions, 
    CardActionArea, 
    CardContent, 
    Chip,
    IconButton,
    Typography, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LabelIcon from '@material-ui/icons/Label';
import { deleteNote } from '../actions/index.js';

import AddLabelToNoteDialog from './AddLabelToNoteDialog.js';
import { DispatchContext } from '../utils/context.js'

import LabelChip from './LabelChip';


const useStyles = makeStyles({
    actionArea: {
    },
    card: {
        minWidth: 200,
        maxWidth: 250,
        padding: 5,
    },
    content: {
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 1,
        paddingBottom: 3,
    },
    title: {
        flex: 1,
        padding: 1,
    },
    body: {
        padding: 2,
    },
    label: {
        transform: "scale(0.8)",
    },
    edit: {
        transform: "scale(0.8)",
    },
    bin: {
        transform: "scale(0.8)",
        position: "relative",
        left: 80,
    },
});


const NoteContent = (props) => {
    const classes = useStyles();
    const { 
        onClick, 
        setFilterKey, 
        id, 
        labels:tags=[], 
        title, 
        body 
    } = props;
    const truncatedTags = tags.slice(0,2);
    const dispatch = React.useContext(DispatchContext);

    const handleDelete = (e) => {
        e.preventDefault();
        deleteNote(dispatch, id);
    };

    const etcTag = (tags.length > truncatedTags.length)
        ?   <div className={styles.labelContainer}>
                <Chip 
                    color="secondary"
                    label={"+" + (tags.length - truncatedTags.length) } 
                    onClick={onClick}
                    size="small"
                    variant="outlined"
                />
            </div>
        : <div/>
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <CardActionArea className={classes.actionArea} onClick={onClick}>
                    <div className={styles.titleBar}>
                        <Typography className={classes.title} variant="h6" color="textSecondary">
                            {title}
                        </Typography>
                    </div>
                    <Typography className={classes.body} variant="body2" component="p">
                        {body}
                    </Typography>
                </CardActionArea>
            </CardContent>
            <div className={styles.allLabelContainer}>
                { truncatedTags.map( tag => 
                <div 
                    className={styles.labelContainer}
                    key={tag.id}
                >
                    <LabelChip 
                        label={tag} 
                        setFilterKey={setFilterKey}
                        taskId={id}
                    />
                </div>
                )}
                {etcTag}
            </div>
            <div>
                <CardActions >
                    <AddLabelToNoteDialog 
                        className={classes.label} 
                        noteLabels={tags} 
                        taskId={id}
                    />
                    <IconButton 
                        className={classes.edit} 
                        aria-label="edit" 
                        size="small" 
                        onClick={onClick}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton 
                        className={classes.bin} 
                        aria-label="delete" 
                        onClick={handleDelete}
                        size="small"
                    >
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </div>
        </Card>
    );
}

export default NoteContent;

                  // <IconButton className={classes.bin} aria-lael="label" size="small">
                  //     <LabelIcon />
                  // </IconButton>
