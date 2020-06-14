import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';

import APIUtil from '../../../../util/api';
const API = new APIUtil();

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#ffffff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  CourseCourseId: string;
  enrollmentId: string;
}

interface UserAssignments {
  assignmentText?: string;
}

export default function EnrollmentCard({ User, UserUserId, CourseCourseId, enrollmentId }: UserEnrollment) {

  const classes = useStyles();

  const [assignment, setAssignment]:any = useState([]);
  const [open, setOpen] = React.useState(false);

   // API Call to get Classes
   useEffect(() => {
    API.getStudentSubmitteds({
      studentId: UserUserId,
      courseId: CourseCourseId
    })
      .then(({ data }) => {
        console.log(data);
        setAssignment(data);
        
      })
      .catch((error) => {
        console.log(error)
      });
    }, []);

  const handleOpen = () => {
    
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // function showAssignments() {
  //   if (assignment.length === 0) {
  //     API.getStudentSubmitteds({
  //       studentId: UserUserId,
  //       courseId: CourseCourseId
  //     })
  //       .then(({ data }) => {
  //         console.log(data);
  //         setAssignment(data);
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  //   }
  // }


  return (
    <React.Fragment>
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
            <Button size="small" onClick={handleOpen}>Assignments</Button>
          </CardActions>
        </Card>
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          {assignment.length !== 0 &&
            <div>
                <h5>Directions</h5>
                <p>{assignment[0].assignmentText}</p>
                <h5>Submitted Assignment</h5>
                <p>{assignment[0].Submitteds[0].submittedContent}</p>
                <h5>Submitted Date</h5>
                <p>{assignment[0].Submitteds[0].createdAt}</p>
            </div>
            }
            {assignment.length === 0 &&
            <div>
                <p>No Assignments Submitted</p>
            </div>
            }
        </div>
      </Modal>
    </React.Fragment>

  )

}

