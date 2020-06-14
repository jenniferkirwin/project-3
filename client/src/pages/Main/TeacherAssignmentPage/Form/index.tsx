import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Connecting to API
import APIUtil from '../../../../util/api';
const API = new APIUtil();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '500px',
      },
    },
  }),
);

export default function Form({selectedCourseId}:any) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  function onSubmit(assignText:string, assignCourseId:string, assignDate:string) {
    API.createAssignment(
      {
        assignmentText: value,
        dueDate: '2020/12/01',
        courseId: selectedCourseId
      } 
    )
      .then(({ data }: any | null) => {
        console.log(data)
      })
      .catch((error: any) => {
        console.log(error)
      });
  }

  return (
    <Grid item xs={12} md={12} lg={12} xl={12}>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-multiline-flexible"
          label="New Assignment"
          multiline
          fullWidth
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />
        {/* <Button onClick={onSubmit} color="primary" >Create Assignment</Button> */}
    </form>
    </Grid>

  );
}