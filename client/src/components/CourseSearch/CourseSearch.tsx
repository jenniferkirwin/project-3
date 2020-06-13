import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CourseCard from "./courseCard";
import Container from "@material-ui/core/Container" ; 
import {DebounceInput} from 'react-debounce-input';
import Paper from "@material-ui/core/Paper";
import AppBar from '../Nav/AppBar';
import { Redirect } from "react-router";

import APIUtil from './../../util/api';
const API = new APIUtil;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 250,
    marginBottom: "16px",
    marginTop: "10px",
    marginRight: "20px",
    marginLeft: "20px",
  },
  my: {
    marginTop:"10px",
    marginBottom:"10px"
  },
  borders: {
    marginTop: "10px",
    marginBottom: "20px",
    border: "1px solid #ececec",
    height: "100px",
    overflowY: "auto",
  },
  title: {
      border: "2px solid #0e1fb5",
      padding: theme.spacing(2),
  },
  inputs: {
      width:"250px",
      borderRadius: "8px",
      paddingTop:"5px",
      paddingLeft: "10px",
      paddingBottom: "5px",
      border:"1px solid #999999"
  },
  courseTitle: {
    marginTop: "16px",
    marginLeft: "12px"
  },
  mg: {
    marginLeft: "10px",
    marginRight: "10px"
  },
  paperSize:{
    height: "100vh"
  },
  centerInput:{
    textAlign: "center",    
    marginTop: "25px",
    marginBottom: "25px"
  },
  center: {
    textAlign: "center",
  }
  
}) );
 

let courseData = [
    {
      courseName:"Art 202", 
      courseId: "12345",
      topic: "Working with clay and glass. We use a kiln to make diffreent projects",
      hours: 8,
      time: "1:00pm to 2:00pm"
    },
    {
      courseName:"Math 101", 
      courseId: "12745",
      topic: "Elementary algebra to abstract algebra will be covered in this course.",
      hours: 8,
      time:"9:00am to 10:00am"
    },
    {
      courseName:"CS 101", 
      courseId: "12245",
      topic: "fundementals of progrmaming. This course will cover basic like loops, if and switch statements, and basic data typse to object oriented programming.",
      hours: 8,
      time: "11:00am to 12:00"
    },
    {
      courseName:"Bio 101", 
      courseId: "67899",
      topic: "This course covers fundementals of biologoy.",
      hours: 8 ,
      time:"10:00am -11:00am"
    },
  ];

const foundCourses = () => API.getCourses(sessionStorage.getItem('School'))
  .then(({data}) => {
    console.log(data)
    courseData = data;
  })
  .catch((error) => {
    console.log(error)
  });

foundCourses();

export default function SearchCourse(){
    const classes = useStyles();
    const [courses, setCourses] = React.useState(courseData); 
    //orginal data serbed from ajax basically static 
    const [ ogData ] = React.useState(courseData);
    const [show, setShow] = React.useState(false);
    //yeah any just becuase of lack of time to define a few interfaces 
    const filterTitle = (text:string):Array<any> => {
        let filtered = courses.filter( (el:any) => {
              let name = el.courseName.replace(/ /g,'');
              console.log(name.toLowerCase() ) ; 
              console.log(name.toLowerCase().indexOf(text) > -1);           
             return name.toLowerCase().indexOf(text) > -1 ;
           });
        console.log(filtered) ; 
        return filtered ;
    }
    const filterTime = (text:string) => {
      let filtered = courses.filter( (el:any) => {
        let times = el.time.replace(/ /g,'');         
       return times.toLowerCase().indexOf(text) > -1 ;
     });


  console.log(filtered) ; 
  return filtered ;
    }

    //call filters based on returns from other filters 
    const filter = (text:string) =>{
        // filter title filters based on  coursename 
        let courseText = filterTitle(text); 
        console.log(courseText) ; 
        if(courseText.length){
            setCourses(courseText);
        } else if( !courseText.length ){
           let testTime = filterTime(text);
           if(!testTime.length ){
             setShow(true);
             setCourses([]);
           }else{
             setCourses(testTime);
           }
        }  
   }

    const search = (text:any) =>{
      text = text.toLowerCase();
       if(text.length){
          filter(text);
       }else {
         setShow(false);
         return setCourses(ogData) ;
       }
  }
     const message = (
       <Grid className={classes.center}>
          <Typography variant="h4" gutterBottom>
              No Results Found
          </Typography>   
       </Grid>
     )   

     let userRoleId = sessionStorage.Role;
     //Student Role: f21db5e4-d63c-4736-9098-04bf4da0ee9e
     //Teacher Role: 5ede9c42-1f1f-4425-8de4-affe508b5adb
   
     if (userRoleId !== "f21db5e4-d63c-4736-9098-04bf4da0ee9e") {
       return <Redirect to="/" />;
     }
     

    return (
      <div>
        <AppBar />
        <>
        <Container  maxWidth="lg">
        <Grid container  spacing={1}  > 
          <Grid  item xs={12} >
            <Grid container  direction="row">
              <Grid item xs={12} >
                <Typography className={classes.courseTitle} variant="h4" gutterBottom>
                  Courses
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.centerInput} xs={12}> 
          <label className={classes.my}>Search for courses</label> <br />
            <DebounceInput
                className={classes.inputs}
                id="search" 
                aria-describedby="search input" 
                placeholder="Search Courses"
                minLength={1}
                debounceTimeout={700}
                onChange={(e) => search(e.target.value)} />
          </Grid>
            { (show)? message : null  } 
            <Grid container  
              direction="row"
              className={classes.mg}
            > 
              {  
                courses.map( (course) => 
                    <CourseCard key={course.courseId} courseId={course.courseId} courseName={course.courseName} classTime={course.time} topic={course.topic} hours={course.hours}></CourseCard>
                )
              }  
            </Grid>
          </Grid>
          
        </Grid>
        </Container>
        </>
      </div>
    )

} 