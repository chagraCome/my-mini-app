import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Demo() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Programming 
        </Typography>
        <Typography variant="h5" component="div">
          where is the joke
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Show</Button>
      
      </CardActions>
    </Card>
  );
}
