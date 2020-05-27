import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import SimpleCard from '../Card/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 2,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);


export default function LandingGrid() {

  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  // };

  return (
    <React.Fragment>
      <CssBaseline />

          <Grid container className={classes.root} spacing={4}>
            <Grid item lg={12}>
              <Grid container justify="center" spacing={spacing}>
                {[0, 1, 2].map((value) => (
                  <Grid key={value} item>
                    <SimpleCard />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

        <Grid container className={classes.root} spacing={4}>
          <Grid item lg={12}>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <SimpleCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.root} spacing={4}>
          <Grid item lg={12}>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <SimpleCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

    </React.Fragment>
  );
}