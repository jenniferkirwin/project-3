import React, { useState } from "react";
//import moment from 'moment';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Notification from "../interfaces/Notification";
import Box from '@material-ui/core/Box';
import Modal from "@material-ui/core/Modal";
/*
might need to add context for since notifcation 
will chagne depending on context 
if its just the course notifcations or the general all notfication 
Probably make it 

context wrapper for each one 

*/


const useStyles = makeStyles((theme) => ({
   
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

 const Notifications: React.FC<Notification> = ({ title , body ,course, date} ) => {
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
export default Notifications;