import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

const SingleCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: "56%" }}
          image={props.flag}
        ></CardMedia>
        <CardContent>
          <Typography component="p">{props.name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleCard;
