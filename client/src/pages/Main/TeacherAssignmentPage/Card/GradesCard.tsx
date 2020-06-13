import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import submitted from '../submitted.json';


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

        <div>
            {submitted.map((submit) => (
                <Card className={classes.root}>
                    <CardContent>
                        <div key={submit.id}>
                            <h1>{submit.submittedId}</h1>
                            <p>{submit.submittedContent}</p>
                            <h3>{submit.grade}</h3>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Grades</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}