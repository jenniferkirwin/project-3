import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 200,
    },
    title: {
        fontsize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ClassHoursCard() {

    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Class Hours Title
                </Typography>
                <Typography variant="h5" component="h2">
                    Name of Student
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Date of meeting
                </Typography>
                <Typography variant="body2" component="p">
                    Description of the meeting
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Confirm meeting?</Button>
            </CardActions>
        </Card>
    );
}