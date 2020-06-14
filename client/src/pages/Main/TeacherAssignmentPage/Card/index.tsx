import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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


  // Assignments: {
  //     createdAt: string;
  //     updatedAt: string;
  //     assignmentId: string;

  // };
  // UserUserId: string;
  // courseId: string;
  // courseName: string
  // UserUserId: string;

}

export default function TeacherAssignmentCard({ Assignments }: any) {

  const classes = useStyles();

  console.log(Assignments)

  return (
    <React.Fragment>

      {Assignments !== undefined && Assignments.length > 0 &&
        Assignments.map((assignmentObj: any, index:number) => (
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Card className={classes.root}>
              <CardContent>
                <div id={assignmentObj.assignmentId}>
                  <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                    Assignment {index+1}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {assignmentObj.assignmentText}
                  </Typography>
                </div>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Assignment</Button>
              </CardActions> */}
            </Card>
          </Grid>

        ))
      }
      {Assignments !== undefined && Assignments.length === 0 &&
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Typography variant="body1" color="textSecondary" component="p">
              No found assignments
            </Typography>
          </Grid>
      }
    </React.Fragment>
  );
}

