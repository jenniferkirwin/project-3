import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import assignments from '../assignment.json';

const useStyles = makeStyles((theme) => ({
    root: {
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

interface TeacherAssignment {
    Assignment: {
        createdAt: string;
        email: string;
        firstName: string;
        lastName: string;
        updatedAt: string;
        userId: string;
    };
    UserUserId: string;
    assignmentId: string;
}

export default function TeacherAssignmentCard({Assignment, UserUserId, assignmentId}:TeacherAssignment) {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <div id={UserUserId}>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                            {Assignment.firstName} {Assignment.lastName}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {Assignment.firstName}{Assignment.lastName}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Assignment</Button>
                </CardActions>
            </Card>
        </div>
    );
}

