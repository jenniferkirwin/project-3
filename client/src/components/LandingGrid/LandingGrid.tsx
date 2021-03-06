import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import SimpleCard from '../Card/index';
import { AuthContext } from "./../Auth/auth.js";
import TeacherHome from './../../pages/Main/MainTeacher';
import StudentHome from './../studentHome/sudentHome';
import { withRouter, Redirect } from "react-router";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 2,
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    control: {
      padding: theme.spacing(2),
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
    fixedHeight: {
      height: 240,
    },
  }),
);



export default function LandingGrid() {

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  let userRoleId = sessionStorage.Role;
    //Student Role: f21db5e4-d63c-4736-9098-04bf4da0ee9e
    //Teacher Role: 5ede9c42-1f1f-4425-8de4-affe508b5adb

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    switch(userRoleId) {
      case "f21db5e4-d63c-4736-9098-04bf4da0ee9e":
        return (
          <div>
            <StudentHome />
          </div>
        );
        break;
      case "5ede9c42-1f1f-4425-8de4-affe508b5adb":
        return (
          <div>
            <TeacherHome />
          </div>
        );
        break;
      default:
          setTimeout(function(){window.location.reload()}, 1000);
          return(
            <span>Loading...</span>
          )
    }
  }
}



/*return (
  <div>
    <div style={{paddingTop: 100}}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <SimpleCard />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <SimpleCard />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <SimpleCard />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  </div>
);
}*/