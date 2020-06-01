import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import StudentCard from "../studentCards/studentCards";
import Calender from "../Calender/Calender";
import Typography from "@material-ui/core/Typography";
import Nav from "../Nav/Nav";
import Notifications from "../Notifications" ;


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
    { title: 'event 1', date: '2020-05-01', url: "2020-05-01" },
    { title: 'event 2', date: '2020-05-20', url: "2020-05-20" },
    { title: 'event 4', date: '2020-05-20', url: "2020-05-20" },
    { title: 'event 6', date: '2020-05-20', url: "2020-05-20" },
    { title: 'event 8', date: '2020-05-20', url: "2020-05-20" },
    { title: 'event 12', date: '2020-05-20', url: "2020-05-20" },
    { title: 'event 14', date: '2020-05-20', url: "2020-05-20" },
    { title: 'event 10', date: '2020-05-20', url: "2020-05-20" },
    { title: 'event 5', date: '2020-06-03', url: "2020-06-03"}
  ]
  return (
    <div className={classes.root}>
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
              <Box m={10} >This has the day events and any current notifcations</Box>
            </Grid>
            <Grid item xs={12}>
              <Calender event={example} />
            </Grid>
        </Grid>
     </Grid>
     </Box>
    </div>
  );
}
