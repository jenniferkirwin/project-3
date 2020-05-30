import React from 'react';
import clsx from 'clsx';
import {
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GradesCard from '../Card/GradesCard';
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
    })
)