import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import assignments from '../assignment.json';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        minHeight: 200,
        overflow: 'auto',
        flexDirection: 'column',
        marginBottom: '16px',
        marginTop: '10px',
        marginRight: '20px',
        marginLeft: '20px',
    },
    media: {
        height: 140,
    },
    title: {
        backgroundColor: "darkblue",
        fontSize: 14,
        color: 'white',
        padding: theme.spacing(2),
        borderTop: '2px solid darkblue',
    },
    size: {
        width: "100%",
        textAlign: "center",
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function TeacherAssignmentCard() {

    const classes = useStyles();

    return (
        <div>
            {assignments.map((assignment) => (
                <Card className={classes.root}>
                    <CardContent>
                    <div key={assignment.id}>
                        <Typography className={classes.title} gutterBottom variant="h1">
                            {assignment.assignmentId}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {assignment.assignmentText}
                        </Typography>
                    </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Assignment</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

