// Dependencies
// ------------------------------------------------------------------
// ------------------------------------------------------------------
import React from 'react';
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
// import APIUtil from '../../util/api';
// const API = new APIUtil;


// interface CourseLayout {
//   courseId: string;
//   courseName: string;
// }

// interface CourseAPICall {
//   Enrollments: Array<object>;
//   SchoolSchoolId: string;
//   UserUserId: string;
//   courseId: string;
//   courseName: string;
//   createdAt: string;
//   updatedAt: string;
// }

// Functions
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// Styles

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginTop: '150px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

// // Course Data

// let courseData: CourseAPICall | any = [];

// // Calling API
// const findTeacherStudents = () => API.getTeacherStudents(sessionStorage.getItem('UID'))
// .then(({data}:any | null) => {
//   console.log(data)
//   courseData = data
// })
// .catch((error:any) => {
//   console.log(error)
// });

// findTeacherStudents();

const courseData: any = [
  {
    "courseId": "014ccfc5-d8d0-4e2b-9d23-92010f4a4be3",
    "courseName": "Another Hogwarts Class",
    "SchoolSchoolId": "638542ac-6c0f-4b7a-b8f0-5af47c134eb0",
    "UserUserId": "FdI3G6lC5sUX8A2Tp0ReRp6TSc32",
    "updatedAt": "2020-06-13T16:55:43.868Z",
    "createdAt": "2020-06-13T16:55:43.868Z"
},
{
  "courseId": "014ccfc5-d8d0-4e2b-9d23-92010f4a4be33",
  "courseName": "Another Hogwarts Class 2",
  "SchoolSchoolId": "638542ac-6c0f-4b7a-b8f0-5af47c134eb0",
  "UserUserId": "FdI3G6lC5sUX8A2Tp0ReRp6TSc32",
  "updatedAt": "2020-06-13T16:55:43.868Z",
  "createdAt": "2020-06-13T16:55:43.868Z"
}
]

// React Object that is exported
// ------------------------------------------------------------------
// ------------------------------------------------------------------

const GradesPage = () => {

  // Constants & Logic

  const classes = useStyles();
  const [courseSelect, setCourseSelect] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCourseSelect(event.target.value as string);
  };

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
              courseData.map((course:any, index:any) =>
                <MenuItem key={course.courseId} value={course.courseName}>{course.courseName}</MenuItem>
            )}
          </Select>
        </FormControl>

        <GradesGrid />
    </div>
  );
}

export default GradesPage;