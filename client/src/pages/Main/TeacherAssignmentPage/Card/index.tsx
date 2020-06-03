import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import assignment from '../assignment.json';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



export default function TeacherAssignmentCard() {
    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Title
                </Typography>
                <Typography variant="h5" component="h2">
                    {bull} Description of assigment
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Due Date 
                </Typography>
                <Typography variant="body2" component="p">
                    More description of the Assignment
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Assignment</Button>
            </CardActions>
        </Card>
    );
}