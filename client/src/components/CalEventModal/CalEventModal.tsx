 import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

/*
For future add modal on calender cl.ick to add  their own event..
for teachers it would allow easy editing to add or dlelete  events like assignemtns
a bit to big for what we are doing right now so back burner 
*/


interface EventProps  {
  open: boolean,
  state: any
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const EventModal: React.FC<EventProps> = ( {open , state } ) => {
  const classes = useStyles();
   const [data, setData] = React.useState(state) ;
  const [show, setShow] = React.useState(open);
  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
   //  <EventModal />

  const body = (
    <div  className={classes.paper}>
      <h2 id="simple-modal-title">prop for date clicked moent JS</h2>
      <p id="simple-modal-description">
        default will display list of events for that day but no event then say no events for this day. then have add or remove btn for events. 
      </p>
    </div>
  );
  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default EventModal ; 