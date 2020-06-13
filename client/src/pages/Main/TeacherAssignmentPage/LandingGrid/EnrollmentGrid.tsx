import React from 'react';
import {
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import EnrollmentCard from '../Card/EnrollmentCard';

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
        fixedHeight: {
            height: 240,
        },
    }),
);

export default function EnrollmentGrid() {

    const classes = useStyles();

    return (
        <div>
            <main className={classes.content}>
                
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={8} lg={9}>

                            <EnrollmentCard />

                        </Grid>

                    </Grid>
                </Container>
            </main>
        </div>
    )

}