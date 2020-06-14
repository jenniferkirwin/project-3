import React, { useState } from "react";
//import moment from 'moment';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
//import Notification from "../interfaces/Notification";
import Box from '@material-ui/core/Box';
import Modal from "@material-ui/core/Modal";
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',  //345,
    marginBottom: '5px',
    marginTop: '5px',
    marginRight: '20px',
    marginLeft: '20px',
  },
  media: {
    height: 150,
  },
  title: {
      // backgroundColor: "lightblue",
      color: "black",
      fontSize: "16px",
      fontWeight: "bold"
      // padding: theme.spacing(2),
  },
  text: {
    color: "black",
    fontSize: "16px",
    fontStyle: "italic"
  },
  size: {
      width:"100%",
      textAlign: "center",
  }
}) );

interface Notification  {
  announcementText: string
}

interface NotificationProps {
  CourseCourseId: string, 
  announcementId: string, 
  announcementText: string, 
  createdAt: string, 
  updatedAt: string 
}


export default function Notification({CourseCourseId, announcementText}:NotificationProps) {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}  elevation={4} >
      <CardContent>
      <Typography className={classes.text} variant="h5" component="h5">
       {announcementText}
      </Typography>
      </CardContent>
    </Card>
  );
};



// Old Notifications ===================================================================
//======================================================================================
//======================================================================================

/*const useStyles = makeStyles((theme) => ({
   
   ntf: {
       border: "1px solid #ececec",
       marginBottom: "16px",
       padding: "20px 20px",
       boxShadow:"0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)"
   },
   course:{
       marginLeft: "10px"
   },
   title:{
       marginRight: "15%",
       marginLeft: "15%"
   },
   paper: {
       backgroundColor: theme.palette.background.paper,
       border: '2px solid #000',
       boxShadow: theme.shadows[5],
       padding: theme.spacing(2, 4, 3),
     },
     modal: {
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
     },
  
 
 }) );

const Notifications: React.FC<Notification> = ({ title, body, course, date} ) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false) ;

     //also add context stuff
     const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const modalBody = (
        <div  className={classes.paper}>
             <h2 id="simple-modal-title">{ title }</h2>
          
          <p id="simple-modal-description" >
            Date: { date }<br /> 
       
            Message: { body }
         </p>
        </div>  
      );

    return(
        <>
        <Box className={classes.ntf} onClick={()=> handleOpen()}>   
            <span className={classes.course} > Course: { course } </span>
            <span className={classes.title}> { title } </span>  
            <span > { date } </span>    
       </Box>
       <Modal
       open={open}
       onClose={handleClose}
       className={classes.modal}
       aria-labelledby="simple-modal-title"
       aria-describedby="simple-modal-description"
     >
       { modalBody }
     </Modal>
     </>
    )
}

export default Notifications;*/