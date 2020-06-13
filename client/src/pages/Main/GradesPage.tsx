// Dependencies
// ------------------------------------------------------------------
// ------------------------------------------------------------------
import React, {useState, useEffect} from 'react';
import GradesGrid from './TeacherAssignmentPage/LandingGrid/GradesGrid';
import TeacherAppBar from './TeacherAssignmentPage/NavBar/index';
import { Redirect } from "react-router";
// Material UI Components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Connecting to API
import APIUtil from '../../util/api';
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

// Functions
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// Styles

const useStyles = makeStyles((theme: Theme) =>
createStyles({
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

// React Object that is exported
// ------------------------------------------------------------------
// ------------------------------------------------------------------

const GradesPage = () => {

  // Constants & Logic

  const classes = useStyles();
  const [courseSelect, setCourseSelect] = useState('');
  const [courses, setCourses] = useState([]);

 // API Call to get Classes
  useEffect(() => {
    API.getTeacherStudents(sessionStorage.getItem('UID'))
    .then(({data}:any | null) => {
      console.log(data)
      setCourses(data)
    })
    .catch((error:any) => {
      console.log(error)
    });
  }, []);

  // Updates Menu Item on Select
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCourseSelect(event.target.value as string);
  };


  // Render Logic

  let userRoleId = sessionStorage.Role;

  if (userRoleId !== "5ede9c42-1f1f-4425-8de4-affe508b5adb") {
    return <Redirect to="/" />;
  }

  // Rendered Function

  return(
    <div>
        <TeacherAppBar />

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
              courses.map((course:CourseAPICall, index:any) =>
                <MenuItem key={course.courseId} value={course.courseName}>{course.courseName}</MenuItem>
            )}
          </Select>
        </FormControl>

        <GradesGrid />
    </div>
  );
}

export default GradesPage;