import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import StudentCard from "../studentCards/studentCards";
import Calender from "../Calender/Calender";
import Typography from "@material-ui/core/Typography";
//import Nav from "../Nav/Nav";
import Notifications from "../Notifications" ;
import AppBar from '../Nav/AppBar';
import { Redirect } from "react-router";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  shift: {
    marginLeft: "100px" 
  },
  mg: {
    marginLeft: '10px',
    marginRight: '10px'
  },
  paper: {
    padding: theme.spacing(2),
   /// backgroundColor: 'darkblue',
    //color: 'white',
  },
  courseTitle: {
    marginLeft: "16px"
  },
  ntf: {
    width:"100%",
    height: "200px",
    overflowY: "auto",
    marginBottom: '16px',
    marginTop: '10px',
    marginRight: '20px',
    marginLeft: '20px',
},


}));
//  <Paper elevation={3} className={classes.paper}> </Paper>
//      <Nav/>
export default function StudentHome() {
  const classes = useStyles();
  const example =  [
    { title: 'Tutoring', date: '2020-06-03', url: "2020-06-03" },
    { title: 'Tutoring', date: '2020-06-10', url: "2020-06-10" },
    { title: 'Tutoring', date: '2020-06-17', url: "2020-06-17" },
    { title: 'Tutoring', date: '2020-06-24', url: "2020-06-24" },
    { title: 'Graduation', date: '2020-06-30', url: "2020-06-30" },
    { title: 'Presentation', date: '2020-06-15', url: "2020-06-15" },
    { title: 'Advisor Meeting', date: '22020-06-11', url: "2020-06-11" },
    { title: 'Class Event', date: '2020-06-26', url: "2020-06-26" },
    { title: 'Project Due', date: '2020-06-12', url: "2020-06-12"}
  ]

  let userRoleId = sessionStorage.Role;
  //Student Role: f21db5e4-d63c-4736-9098-04bf4da0ee9e
  //Teacher Role: 5ede9c42-1f1f-4425-8de4-affe508b5adb

  if (userRoleId !== "f21db5e4-d63c-4736-9098-04bf4da0ee9e") {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <AppBar />
      <div className={classes.root} style={{paddingTop: 100}}>
      <Box> 
        <Grid container  spacing={1}  > 
          <Grid  item xs={12}  sm={6}> 
            <Grid container  direction="row">
              <Grid xs={12} >
                <Typography className={classes.courseTitle} variant="h5" gutterBottom>
                  Courses
                </Typography>
              </Grid>
            </Grid>
            <Grid container  
              direction="row"
              className={classes.mg}
            >  
                <StudentCard /> 
                <StudentCard />
                <StudentCard /> 
                <StudentCard /> 
            </Grid>
          </Grid>
        <Grid  item xs={12} sm={6} spacing={1}> 
        <Grid xs={12} >
                <Typography className={classes.courseTitle} variant="h5" gutterBottom>
                  Notifications
                </Typography>
              </Grid> 
              <Grid item xs={12}>
                <Box className={classes.ntf} >
                  <Notifications title="testing" body="moretesting" course="derp"  date="05/27/2020" /> 
                  <Notifications title="testing" body="moretesting" course="derp"  date="05/27/2020" /> 
                  <Notifications title="testing" body="moretesting" course="derp"  date="05/27/2020" /> 
                  <Notifications title="testing" body="moretesting" course="derp"  date="05/27/2020" /> 
                  <Notifications title="testing" body="moretesting" course="derp"  date="05/27/2020" /> 
                  <Notifications title="testing" body="moretesting" course="derp"  date="05/27/2020" /> 
                  <Notifications title="testing" body="moretesting" course="derp"  date="05/27/2020" /> 
                </Box>
                <Box m={10} ></Box>
              </Grid>
              <Grid item xs={12}>
                <Calender event={example} />
              </Grid>
          </Grid>
      </Grid>
      </Box>
      </div>
    </div>
  );
}
