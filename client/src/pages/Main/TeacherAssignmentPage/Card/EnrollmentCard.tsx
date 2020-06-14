import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

interface UserEnrollment {
  User: {
    createdAt: string;
    email: string;
    firstName: string;
    lastName: string;
    updatedAt: string;
    userId: string;
  };
  UserUserId: string;
  enrollmentId: string;
}

export default function EnrollmentCard({User, UserUserId, enrollmentId}:UserEnrollment) {

    const classes = useStyles();

    return(

          <Grid item xs={12} md={3} lg={4} xl={4}>
            <Card className={classes.root}>
                <CardContent>
                    <div id={UserUserId}>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                            {User.firstName} {User.lastName}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                          First Name:{User.firstName}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                          Last Name:{User.lastName}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                          E-Mail:{User.email}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Assignments</Button>
                </CardActions>
            </Card>
          </Grid>

    )

}

