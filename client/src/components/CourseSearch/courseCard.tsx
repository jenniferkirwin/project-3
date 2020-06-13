import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box" ; 
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth:  300,  //345,
      minWidth: 250,
      marginBottom: '16px',
      marginTop: '10px',
      marginRight: '20px',
      marginLeft: '20px',
    },
    borders: {
      marginTop: "10px",
      marginBottom: "20px",
      border: "1px solid #ececec",
      height: "100px",
      overflowY: "auto",
    },
    media: {
      height: 140,
    },
    title: {
        borderRadius: "12px",
        border: "2px solid #0e1fb5",
        padding: theme.spacing(2),
    },
    cardEvent: {
      paddingLeft:"10px",
      borderBottom: "1px solid #ececec"
    },
    courseTitle: {
      marginLeft: "12px"
    },
    courseDesc: {
        paddingLeft:"10px",
        borderBottom: "1px solid #ececec"
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
interface courseProps {
  courseName: string,
  courseID: string,
  topic: string,
  hours: number,
  classTime: string
}
/* 
 courseName:"Bio 101", 
      courseID: "67899",
      topic: "Bio 101 : \n This course covers fundementals of biologoy.",
      Hours: "8",
*/

// export default function CourseCard({courseName, courseID , topic, hours, classTime }:courseProps ){
export default function CourseCard({courseName, courseID }:courseProps ){
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
          <h2 id="simple-modal-title">{ courseName }</h2>
          <p id="simple-modal-description" >
            {/* Class time: { classTime }<br /> 
            Class decption: { topic } */}
            Class time: 9 AM - 11 AM <br /> 
            Class description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper tristique mi, id convallis felis. Praesent vestibulum, neque non tristique facilisis, mi mauris fermentum velit, ut iaculis libero metus sit amet massa.
         </p>
        </div>  
      );
    const addCourse = (id:string) => {
        console.log("added course: " + id);
        //call post axios function to post with id 
    }
    return (
     <>
      <Card key={courseID} className={classes.root}  elevation={5} >
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            { courseName }
          </Typography>
          <Box >  
            <Typography className={classes.courseTitle} variant="body2" gutterBottom>
                {/* Scheduled time: { classTime } <br/>
                Course credit hours: { hours } <br />  */}
                Scheduled time: 9 AM - 11 AM <br/>
                Course credit hours: 8 <br /> 
            </Typography> 
         </Box>
        </CardContent>
        <CardActions>
            <Button onClick={() => addCourse(courseID) } size="small"  variant="outlined" color="primary">
                Add Course
            </Button> 
            <Button size="small" onClick={()=> handleOpen()}  variant="outlined" color="primary">
                Course Details
            </Button>
       </CardActions>
      </Card> 
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