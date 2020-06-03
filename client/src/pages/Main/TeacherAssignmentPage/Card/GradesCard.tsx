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

export default function GradesCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Overall Grade
                </Typography>
                <Typography variant="h5" component="h2">
                    Name of Student
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Full list of grades</Button>
            </CardActions>
        </Card>
    );
}