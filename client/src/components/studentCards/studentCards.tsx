import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Notification from "../interfaces/Notification";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:  300,  //345,
    marginBottom: '16px',
    marginTop: '10px',
    marginRight: '20px',
    marginLeft: '20px',
  },
  media: {
    height: 140,
  },
  title: {
      backgroundColor: "darkblue",
      color: "white",
      padding: theme.spacing(2),
      borderTop: "2px solid darkblue",
  },
  size: {
      width:"100%",
      textAlign: "center",
  }
}) );
/*  
 <CardActionArea>
        <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          Title of class
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This is a card for each class. This area might/will be a notifcation area idk for now. below click will be a route for now a button
        </Typography>
      </CardContent>
      </CardActionArea>
*/
interface StudentCard  {
  title: String,
  Notifcation: Notification[],
}

interface StudentCardProps {
  courseName: string,
}

export default function StudentCard({courseName}:StudentCardProps) {
    const classes = useStyles();
    return (
      <Card className={classes.root}  elevation={5} >
        <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {courseName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* Secondary information per class, can be adjusted later */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" className={classes.size} color="primary">
         view Course
        </Button>
       
     </CardActions>
    </Card>
);

}