import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Joke } from "./Type/JokeType";
type DemoProps = {
  joke: Joke;
};

const JokeCard: React.FC<DemoProps> = ({ joke }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {joke.type}
        </Typography>
        <Typography variant="h5" component="div">
          {joke.setup}
        </Typography>
        <Typography variant="body2">
          {joke.punchline}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Show</Button>
      </CardActions>
    </Card>
  );
};
export default JokeCard;
