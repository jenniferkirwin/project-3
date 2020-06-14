import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ClassHoursCard from './TeacherAssignmentPage/Card/ClassHours';
import GradesCard from './TeacherAssignmentPage/Card/GradesCard';
import TeacherAssingmentCard from './TeacherAssignmentPage/Card/index';
import TeacherAppBar from './TeacherAssignmentPage/NavBar/index';
import TeacherPage from '../Main/TeacherAssignmentPage/LandingGrid/index';
import { Redirect } from "react-router";

import APIUtil from '../../util/api';
const API = new APIUtil();

interface AssignmentAPICall {
  Enrollments: Array<object>;
  SchoolSchoolId: string;
  UserUserId: string;
  courseId: string;
  courseName: string;
  createdAt: string;
  updatedAt: string;
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
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
    listItem: {
        color: 'black',
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        API.getTeacherAssignments(sessionStorage.getItem('UID'))
        .then(({data}:any | null) => {
            setAssignments(data)
        })
        .catch((error:any) => {
            console.log(error)
        });
    }, []);

    let userRoleId = sessionStorage.Role;
    //Student Role: f21db5e4-d63c-4736-9098-04bf4da0ee9e
    //Teacher Role: 5ede9c42-1f1f-4425-8de4-affe508b5adb

    if (userRoleId !== "5ede9c42-1f1f-4425-8de4-affe508b5adb") {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <TeacherAppBar />
            <div className={classes.root}>
                <CssBaseline />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            {/* Class Hours */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper className={fixedHeightPaper}>
                                    <ClassHoursCard />
                                </Paper>
                            </Grid>
                            {/* Student Grades */}
                            <Grid item xs={12} md={8} lg={3}>
                                <Paper className={fixedHeightPaper}>
                                    <GradesCard />
                                </Paper>
                            </Grid>
                            {/* Teacher Assignments */}
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
        </div>
    );
}