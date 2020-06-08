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



export default function TeacherAssignmentCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {assignment.map((assignmentDetail, index) => {
                        return <div key={index}>
                            <h1>{assignmentDetail.assignmentId}</h1>
                            <p>{assignmentDetail.assignmentText}</p>
                            <CardActions>
                                <Button size="small">Assignment</Button>
                            </CardActions>
                        </div>
                    })}
                </Typography>

                {/* <Typography variant="h5" component="h2">
                    {assignment.map((assignmentDetail, index) => {
                        return <h2>{assignmentDetail.assignmentText}</h2>
                    })}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Due Date 
                </Typography>
                <Typography variant="body2" component="p">
                    More description of the Assignment
                </Typography> */}
            </CardContent>

        </Card>
    );
}