import React, { useContext } from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import GradeIcon from '@material-ui/icons/Grade';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignedInLinks from '../Auth/Links/SignedInLinks.jsx'
import SignedOutLinks from '../Auth/Links/SignedOutLinks.jsx'
import { AuthContext } from "../Auth/auth.js";
import { NavLink } from 'react-router-dom'
import AccessTimeIcon from '@material-ui/icons/AccessTime';



const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    listItem: {
      color: "black"
    },
  }),
);

let menuItems = [];

let userEmail = "";
let userRoleId = sessionStorage.Role;
  //Student Role: f21db5e4-d63c-4736-9098-04bf4da0ee9e
  //Teacher Role: 5ede9c42-1f1f-4425-8de4-affe508b5adb
let greetingString;

type TParams = { id: string };

export default function SearchAppBar() {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);
  //Set the greeting string
  if (currentUser) {
    userEmail = currentUser.email;
    greetingString = `Welcome, ${userEmail}`;
  } else {
    greetingString = `Welcome to Skooled! Please Sign In or Create an Account`; 
  }
  //Set the sidebar menu items
  switch(userRoleId) {
    case "f21db5e4-d63c-4736-9098-04bf4da0ee9e":
      menuItems = [
        {
          listIcon: <HomeIcon />,
          listText: "Student Home",
          listPath: "/",
        },
        {
          listIcon: <AssignmentIcon />,
          listText: "Student Course Search",
          listPath: "/student-course-search",
        },
        {
          listIcon: <GradeIcon />,
          listText: "Student Grades",
          listPath: "/student-grades",
        }
      ];
      break;
    case "5ede9c42-1f1f-4425-8de4-affe508b5adb":
      menuItems = [
        {
          listIcon: <HomeIcon />,
          listText: "Teacher Home",
          listPath: "/",
        },
        {
          listIcon: <AssignmentIcon />,
          listText: "Teacher Assignments",
          listPath: "/teacher-upload-assignment",
        },
        {
          listIcon: <GradeIcon />,
          listText: "Teacher Grade View",
          listPath: "/teacher-grades",
        },
        {
          listIcon: <AccessTimeIcon />,
          listText: "Teacher Class Hours",
          listPath: "/teacher-class-hours",
        }
      ];
      break;
    default:
      menuItems = [
        {
          listIcon: <HomeIcon />,
          listText: "Student Home",
          listPath: "/student-home",
        },
        {
          listIcon: <AssignmentIcon />,
          listText: "Student Course Search",
          listPath: "/student-course-search",
        },
        {
          listIcon: <GradeIcon />,
          listText: "Student Grades",
          listPath: "/student-grades",
        },
        {
          listIcon: <HomeIcon />,
          listText: "Teacher Home",
          listPath: "/teacher-home",
        },
        {
          listIcon: <AssignmentIcon />,
          listText: "Teacher Assignments",
          listPath: "/teacher-upload-assignment",
        },
        {
          listIcon: <GradeIcon />,
          listText: "Teacher Grade View",
          listPath: "/teacher-grades",
        },
        {
          listIcon: <AccessTimeIcon />,
          listText: "Teacher Class Hours",
          listPath: "/teacher-class-hours",
        }
      ];
  } 

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (currentUser) {
    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <NavLink activeStyle={{color: 'white', textDecoration: 'none'}} to='/'>
                <Typography variant="h6" noWrap>
                  { greetingString }
                </Typography>
              </NavLink>
              <SignedInLinks />
            </Toolbar> 
          </AppBar>
    
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              {menuItems.map((lsItem, key) => (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                  <ListItemIcon className={classes.listItem}>
                    {lsItem.listIcon}
                  </ListItemIcon>
                  <ListItemText className={classes.listItem} primary={lsItem.listText} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      ); 
   } else {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <NavLink activeStyle={{color: 'white', textDecoration: 'none'}} to='/'>
              <Typography variant="h6" noWrap>
                { greetingString }
              </Typography>
            </NavLink>
            <SignedOutLinks />
          </Toolbar> 
        </AppBar>
      </div>
    ); 
   }
}
