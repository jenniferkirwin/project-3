import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TeacherAssignmentCard from '../Card/index';
import Container from '@material-ui/core/Container';

//Additional Material UI Components
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Connecting to API
import APIUtil from '../../../../util/api';
const API = new APIUtil();

interface CourseAPICall {
  Enrollments: Array<object>;
  SchoolSchoolId: string;
  UserUserId: string;
  courseId: string;
  courseName: string;
  createdAt: string;
  updatedAt: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 2,
    },
    control: {
      padding: theme.spacing(5),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginTop: '125px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function TeacherPage({ Assignments }: any) {

  const classes = useStyles();

  // Constants and logic

  const [courseSelect, setCourseSelect] = useState('');
  const [courses, setCourses] = useState([]);
  const [assignment, setAssignment] = useState({});

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // API Call to get Classes
  useEffect(() => {
    API.getTeacherAssignments(sessionStorage.getItem('UID'))
      .then(({ data }: any | null) => {
        setCourses(data)
      })
      .catch((error: any) => {
        console.log(error)
      });
  }, []);

  // Updates Menu Item on Select
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCourseSelect(event.target.value as string);
    let test = courses.find((element: any) => {
      return element.courseName === event.target.value
    });
    if (test) {
      setAssignment(test);
      console.log(test);
    };

  };

  return (
    <div>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="course-select">Select Course</InputLabel>
                <Select
                  labelId="course-select"
                  id="course-option"
                  value={courseSelect}
                  onChange={handleChange}
                  label="Select Course"
                >
                  {
                    courses.map((course: CourseAPICall, index: any) =>
                      <MenuItem key={course.courseId} id={course.courseId} value={course.courseName}>{course.courseName}</MenuItem>
                    )}
                </Select>
              </FormControl>
            </Grid>

            <TeacherAssignmentCard {...assignment} />

          </Grid>
        </Container>
      </main>

    </div>
  );
}