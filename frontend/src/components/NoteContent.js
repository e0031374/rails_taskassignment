import React from 'react';
import styles from '../static/css/NoteContent.module.css';
import { 
    Card, 
    CardActions, 
    CardActionArea, 
    CardContent, 
    IconButton,
    Typography, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import LabelChip from './LabelChip';


const useStyles = makeStyles({
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
    const { tags, title, body } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea onClick={props.onClick}>
            <CardContent className={classes.content}>
                <div className={styles.titleBar}>
                    <Typography className={classes.title} variant="h6" color="textSecondary">
                        {title}
                    </Typography>
                    <IconButton className={classes.bin} aria-lael="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
                <Typography className={classes.body} variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            <div className={styles.allLabelContainer}>
                { tags.map( tag => 
                <div className={styles.labelContainer}>
                    <LabelChip label={tag}/>
                </div>
                )}
            </div>
            </CardActionArea>
        </Card>
    );
}

export default NoteContent;
