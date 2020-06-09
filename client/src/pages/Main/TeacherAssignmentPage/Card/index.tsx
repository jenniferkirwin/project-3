import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import assignments from '../assignment.json';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 200,
        overflow: 'auto',
        flexDirection: 'column',
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

// interface AssignmentProps {
//     assignmentId: string
//     assignmentText: string
//     courseId: string
// }


export default function TeacherAssignmentCard() {

    const classes = useStyles();

    return (
        <div>
            {assignments.map((assignment) => (
                <Card className={classes.root}>
                    <CardContent>
                    <div key={assignment.id}>
                        <h1>{assignment.assignmentId}</h1>
                        <p>{assignment.assignmentText}</p>
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

