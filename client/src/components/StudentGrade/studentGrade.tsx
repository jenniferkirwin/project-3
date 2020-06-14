import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GradeCard from "./GradeCard";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import AppBar from "../Nav/AppBar";
import { Redirect } from "react-router";

import APIUtil from "./../../util/api";
const API = new APIUtil();

const testData = [
  {
    assignmentId: "lkjho",
    title: "Homework 1",
    status: "Not submited",
    submited: false,
    graded: false,
    grade: "",
    dueDate: "2020-06-28",
    submitDate: "",
    assignmentText:
      "Submit a summary on the story arc of Harry potter Philosopher's Stone ",
  },
  {
    iassignmentIdd: "asidhed",
    title: "Homework 2",
    status: "Not submited",
    submited: false,
    graded: false,
    grade: "",
    dueDate: "2020-07-04",
    submitDate: "",
    assignmentText:
      "Write a small paragraph on your favorite character in Harry potter as a whole.",
  },
  {
    assignmentId: "cnghdk",
    title: "Homework 3",
    status: "Not submited",
    submited: false,
    graded: false,
    grade: "",
    dueDate: "2020-07-16",
    submitDate: "",
    assignmentText:
      "Submit a summary on the story arc of Harry potter Prisoner of ascombain",
  },
  {
    assignmentId: "qwere",
    title: "Homework 4",
    status: "Not submited",
    submited: false,
    graded: false,
    grade: "",
    dueDate: "2020-07-28",
    submitDate: "",
    assignmentText: "Submit a summary on this past weeks readins.",
  },
  {
    assignmentId: "asdf",
    title: "Homeowrk 5",
    status: "Not submited",
    submited: false,
    graded: false,
    grade: "",
    dueDate: "2020-26-07",
    submitDate: "",
    assignmentText:
      "Submit a brief paragraph on what deathly hallows you would use if you were given a choice. Note you can only choose one!",
  },
];

const useStyles = makeStyles((theme) => ({
  shift: {
    marginLeft: "100px",
  },
  mg: {
    marginLeft: "10px",
    marginRight: "10px",
  },
  mgt: {
    marginTop: "90px",
  },
  centerInput: {
    textAlign: "center",
  },
  borders: {
    marginTop: "10px",
    marginBottom: "20px",
    border: "1px solid #ececec",
  },
  paper: {
    marginTop: "20px",
    padding: theme.spacing(2),
    /// backgroundColor: 'darkblue',
    //color: 'white',
  },
  GradeTitle: {
    marginTop: "16px",
    marginLeft: "10px",
  },

  table: {
    minWidth: 650,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleTable() {
  const classes = useStyles();
  const [grades, setGrades] = React.useState(testData);
  const [courses, setCourses] = React.useState([]);
  const [courseID, setCourseId] = React.useState("");
  const [ogData] = React.useState(testData);

  const getAssignments = (id: string) => {
    let list: any = [];
    API.getAssignments(id).then(({ data }) => {
      console.log("this is call after changed");
      console.log(data);
      let courseHw = data[0];
      let hwList = courseHw.Assignments;
      console.log(hwList);
      hwList.forEach((el: any) => list.push(el));
      setGrades(list);
    });
  };

  const handleChange = (event: any) => {
    let val = event.target.value;
    if (val === "og") {
      setGrades(ogData);
    } else {
      setCourseId(val);
      getAssignments(event.target.value as string);
      console.log(event.target.value);
    }
  };

  function loadCourses() {
    API.getStudentCourses(sessionStorage.getItem("UID"))
      .then(({ data }) => {
        setCourses(data);
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    loadCourses();
  }, []);

  //=================================
  let userRoleId = sessionStorage.Role;
  //Student Role: f21db5e4-d63c-4736-9098-04bf4da0ee9e
  //Teacher Role: 5ede9c42-1f1f-4425-8de4-affe508b5adb

  if (userRoleId !== "f21db5e4-d63c-4736-9098-04bf4da0ee9e") {
    return <Redirect to="/" />;
  }
  return (
    <>
      <AppBar />
      <Container className={classes.mgt} maxWidth="xl">
        <Grid container direction="row">
          <Grid item xs={12}>
            <Typography
              className={classes.GradeTitle}
              variant="h4"
              gutterBottom
            >
              Grades
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.centerInput} xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="select-label">Select course</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={courseID}
              onChange={handleChange}
            >
              <MenuItem value="og">Test Data</MenuItem>
              {courses.map((course: any) => (
                <MenuItem key={course.courseId} value={course.courseId}>
                  {course.courseName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {grades.map((hw: any, i) => (
            <GradeCard
              key={hw.CourseCourseId}
              hwID={hw.assignmentId}
              title={"Homework " + (i + 1)}
              dueDate={hw.dueDate}
              submitDate=""
              grade=""
              submited={false}
              status="Not Submited"
              details={hw.assignmentText}
            ></GradeCard>
          ))}
        </Grid>
      </Container>
    </>
  );
}
