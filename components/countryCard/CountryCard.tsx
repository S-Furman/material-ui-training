import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

const CountryCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: "56%" }}
          image="https://bi.im-g.pl/im/18/9c/18/z25808152V,Opustoszale-centrum-Katowic-w-czasie-wielkiej-naro.jpg"
        ></CardMedia>
        <CardContent>
          <Typography component="p">siema</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CountryCard;
