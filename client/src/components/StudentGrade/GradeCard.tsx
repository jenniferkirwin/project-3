import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from "moment";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
    borderTop: "1px solid #787673",
    paddingTop: "10px",
    paddingBottom: "10px" 
  },
  title:{
    fontWeight: 600,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    maxWidth: "320px",
    padding: theme.spacing(2, 4, 3),
  },
  panel: {
    border: "1px solid #3f51b5",
    marginTop: "10px",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  mgt: {
      marginTop: "10px"
  }
}));

interface AsignmentProps {
  title: string;
  dueDate: string;
  submitDate: string;
  grade: string;
  hwID: string;
  status: string;
  details: string;
  submited: boolean; 
}

export default function GradeCard({
  title,
  hwID,
  dueDate,
  submitDate,
  grade,
  status,
  details,
  submited
}: AsignmentProps) {
  //could have uses a big state but this way its clear what changes based on usedr interactions
  const [open, setOpen] = React.useState(false) ;
  const [form, setForm] = React.useState({value: ""});
  const [curStatus, setcurStatus] = React.useState(status);
  const [hwSubmited, setSubmited] = React.useState(submited);   
  const [submitedDate, setsubmitedDate] = React.useState(submitDate);
  //store day and 
  let day = moment().format("MM/DD/YYYY"); 
  //(submitDate.length === 0 )? setSubmited(false) : setSubmited(true) ;
  const classes = useStyles();

    //----------------------------------
    // Handlers for this component
    const handleSubmit = (id: string , event:any ) => {
      event.preventDefault();
      console.log(form.value);
      setcurStatus("Submited");
      setSubmited(true);
      setOpen(false);
      setsubmitedDate(day);
    };
     
    const handleChange = (event: any) => {
      setForm({value: event.target.value } )
    }
     //also add context stuff
     const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


//----------- React fragments 
//React.FormEvent<HTMLTextAreaElement>
  const modalBody = (
    <div  className={classes.paper}>
      <h4 id="modal-homework-title">{title}</h4>  
        <p id="modal-homework-description"> 
          <strong>Asignment Details: </strong>
          <br /> 
          { details } 
        </p> 
        <p>Submit your answer below</p>
      <form onSubmit={(event:any) => handleSubmit(hwID , event )}> 
        <TextareaAutosize aria-label="text area submit answer" 
        rowsMin={12} 
        rowsMax={12}
        placeholder="Submit Answer" 
        value={form.value} 
        onChange={(event ) => handleChange( event )}
        required
       />
      <br />
      <Button className={classes.mgt} type="submit" value="submit" name="submit"  variant="contained" color="primary">Submit</Button>
    </form>
    </div>  
  );
  //---------------------------------
  // expand to read homeowrk DESC
   const expandable = (
    <ExpansionPanel className={classes.panel}>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>Asignment Details</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        { details }
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
   )
 ///---------------------------------------
 // the following are the main cards for submit and graded 
  const submit = (
    <Box className={classes.root}> 
    <Grid  item xs={12}>
      <Grid container direction="row">
        <Grid item xs={12} sm={4}>
        <Typography
              variant="h6"
              className={classes.title}
            >
          {title}
        </Typography>
        </Grid>
        <Grid  item xs={12} sm={4}>
          <strong> Status: {curStatus}</strong> <br />
          <strong>Due Date: </strong>{dueDate}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button onClick={()=> handleOpen()} variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        { expandable }
      </Grid>
    </Grid>
    </Box>
  );
  const graded = (
    <Box className={classes.root}> 
    <Grid item xs={12}>
      <Grid container direction="row">
        <Grid item xs={12} sm={4}>
        <Typography
              variant="h6"
              className={classes.title}
            >
          {title}
        </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
        <strong>Status: {curStatus}</strong> <br />
        <strong>Due Date:</strong>  {dueDate}
          
        </Grid>
        <Grid item xs={12} sm={4}>
          <strong>Grade: {grade}  </strong> <br />
          <strong>Submited on: </strong> {submitedDate}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        { expandable }
      </Grid>
    </Grid>
    </Box>
  );

  return (
    <>
      <div>{hwSubmited ? graded : submit} </div>
      <Modal
       open={open}
       onClose={handleClose}
       className={classes.modal}
       aria-labelledby="modal-homework-title"
       aria-describedby="modal-homework-description"
     >
       { modalBody }
     </Modal> 
    </>
  );
}
