import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GradeCard from "./GradeCard";



const useStyles = makeStyles((theme) => ({
  shift: {
    marginLeft: "100px",
  },
  mg: {
    marginLeft: "10px",
    marginRight: "10px",
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
  ntf: {
    width: "100%",
    height: "200px",
    overflowY: "auto",
    marginBottom: "16px",
    marginTop: "10px",
    marginRight: "20px",
    marginLeft: "20px",
  },
  table: {
    minWidth: 650,
  },
}));

export default function SimpleTable() {
  const classes = useStyles();
  const data = [
    {
      id: "lkjho",
      title: "Homework 1",
      status: "Not submited",
      submited: false,
      graded: false,
      grade: "-",
      dueDate: "03/20/2020",
      submitDate: "",
      details: "just submit somehitng "
    },
    {
      id: "asidhed",
      title: "Homework 1",
      status: "Not submited",
      submited: false,
      graded: false,
      grade: "",
      dueDate: "03/20/2020",
      submitDate: "",
      details: "just submit somehitng "

    },
    {
      id: "cnghdk",
      title: "Homework 1",
      status: "Not submited",
      submited: false,
      graded: false,
      grade: "",
      dueDate: "03/20/2020",
      submitDate: "",
      details: "just submit somehitng "
    },
    {
      id: "qwere",
      title: "Homework 1",
      status: "Not submited",
      submited: false,
      graded: false,
      grade: "",
      dueDate: "03/20/2020",
      submitDate: "",
      details: "just submit somehitng "

    },
    {
      id: "asdf",
      title: "Homeowrk 1",
      status: "Not submited",
      submited: false,
      graded: false,
      grade: "",
      dueDate: "03/20/2020",
      submitDate: "",
      details: "just submit somehitng "

    },
  ];
  const [grades, ] = React.useState(data);

  return (
    <Container maxWidth="xl">
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
        <Grid item xs={12}>
          {grades.map((hw) => (
            <GradeCard
              key={hw.id}
              hwID={hw.id}
              title={hw.title}
              dueDate={hw.dueDate}
              submitDate={hw.submitDate}
              grade={hw.grade}
              submited={hw.submited}
              status={hw.status}
              details={hw.details}
            ></GradeCard>
          ))}
        </Grid>
    </Container>
  );
}

