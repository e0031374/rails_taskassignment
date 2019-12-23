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

import AddLabelToNoteDialog from './AddLabelToNoteDialog.js';

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
    bin: {
        transform: "scale(0.8)",
    },
});


const NoteContent = (props) => {
    const classes = useStyles();
    const { onClick, setFilterKey, tags, title, body } = props;
    const truncatedTags = tags.slice(0,2);
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
                <div className={styles.labelContainer}>
                    <LabelChip label={tag} onClick={() => setFilterKey(tag)}/>
                </div>
                )}
                {etcTag}
            </div>
            <div>
                <CardActions >
                    <AddLabelToNoteDialog noteLabels={tags} />
                    <IconButton className={classes.bin} aria-lael="edit" size="small" onClick={onClick}>
                        <EditIcon />
                    </IconButton>
                    <IconButton className={classes.bin} aria-lael="delete" size="small">
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
