import React, { useState } from "react";
//import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

//import EventModal from "../CalEventModal/CalEventModal";
//import './main.scss' // webpack must be configured to do this
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import events from "../interfaces/CalEvent" ;

interface CalProps {
  event: events[] //title date url all strings
}

export default function Calender( { event }:CalProps ) { 
  const [openModal, setopenModal] = useState(false) ;
  const [data, setData] = useState( event );

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      paddingTop: '10px',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingBottom: '10px'
    },
    media: {
      height: 140,
    },
    title: {
        //backgroundColor: "darkblue",
       // color: "white",
        padding: theme.spacing(2),
        border: "2px solid darkblue",
    },
    size: {
        width:"100%",
        textAlign: "center",
    }
  }) );
  const classes = useStyles();
  const handleEventClick = ( el: any) => {
    el.jsEvent.preventDefault(); // don't let the browser navigate

    console.log(el.event.title);
   // console.log(el.event.url);
  }
    const handleDateClick = ( day: any ) => {
      //had no idea what type was being based so any it is 
      console.log('Clicked on: ' + day.dateStr);
    alert('Current view: ' + day.view.type);
    // change the day's background color just for fun
    day.dayEl.style.backgroundColor = 'red';
      setopenModal(!openModal);
      console.log(openModal) ;
    }


    return (
      <Paper elevation={5} className={classes.root}>
         <FullCalendar defaultView="dayGridMonth" 
          eventClick={(el) => handleEventClick(el)} 
          eventLimit={4}  dateClick={( info:any ) => handleDateClick(info) }
          plugins={[ dayGridPlugin,interactionPlugin ]}  
          events={data} 
          />
      </Paper>
    )
  
}
 
