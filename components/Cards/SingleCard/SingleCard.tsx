import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.default,
  },
}));

const SingleCard = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
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
