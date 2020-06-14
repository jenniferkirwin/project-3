import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import submitted from '../submitted.json';


const useStyles = makeStyles((theme) => ({
    root: {
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
        fontsize: 14,
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

interface UserGrades {
    User: {
        firstName: string;
        lastName: string;
    }
}

export default function GradesCard() {

    const classes = useStyles();

    return (

        <div>
            {submitted.map((submit) => (
                <Card className={classes.root}>
                    <CardContent>
                        <div key={submit.id}>
                            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                {submit.submittedId}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {submit.submittedContent}
                            </Typography>
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