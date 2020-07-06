import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { Skeleton, Pagination } from "@material-ui/lab/";
import { MuiTypography } from "../..";

export interface CardYoutubeProps {
  data: Array<{ img: string; title: string; price: string }>;
  title: string;
  loading?: boolean;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.light,
      backgroundImage: "url('/static/img/productCurvyLines.png')",
      overflow: "hidden",
    },
    title: {
      margin: theme.spacing(2),
      marginLeft: theme.spacing(10),
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(2),
        marginLeft: theme.spacing(2),
      },
    },
    pagination: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    card: {
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 10,
      },
    },
  })
);

const CardYoutube: React.SFC<CardYoutubeProps> = (props) => {
  const { data, title, loading = false } = props;
  const classes = useStyle();
  return (
    <section className={classes.root}>
      {!loading && (
        <MuiTypography
          variant="h6"
          marked="left"
          gutterBottom
          className={classes.title}
        >
          {title} ({data.length} productos)
        </MuiTypography>
      )}
      <Grid container>
        <Grid item md={1} />
        <Grid item md={7} xs={12}>
          {/* <p style={{ textAlign: "center" }}> Flitros </p> */}
        </Grid>
        <Grid className={classes.pagination} item md={4} xs={12}>
          <Pagination count={data.length} variant="outlined" shape="rounded" />
        </Grid>
      </Grid>
      <Grid className={classes.card} container justify="center">
        {(loading ? Array.from(new Array(12)) : data).map((item, index) => (
          <Box key={index} width={190} marginRight={1} my={2}>
            {item ? (
              <img
                style={{ width: 190, height: 150 }}
                alt={item.title}
                src={item.img}
              />
            ) : (
              <Skeleton variant="rect" width={190} height={150} />
            )}
            {item ? (
              <Box pr={2}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography
                  display="block"
                  variant="caption"
                  color="textSecondary"
                >
                  {item.price}
                </Typography>
                {/* <Typography variant="caption" color="textSecondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography> */}
              </Box>
            ) : (
              <Box pt={1}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
      <br />
      <br />
      <Grid container>
        <Grid item md={8}></Grid>
        <Grid item md={4} className={classes.pagination} xs={12}>
          <Pagination count={data.length} variant="outlined" shape="rounded" />
        </Grid>
      </Grid>
    </section>
  );
};

export default CardYoutube;
