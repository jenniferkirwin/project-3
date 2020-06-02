import React from 'react';
import clsx from 'clsx';
import {
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClassHoursCard from '../Card/ClassHours';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

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
    }),
);

export default function ClassHoursGrid() {

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return(
        <div>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <ClassHoursCard />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <ClassHoursCard />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <ClassHoursCard />
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </main>

        </div>
    );
}