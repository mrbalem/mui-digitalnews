import * as React from "react";
// component material ui
import {
  createStyles,
  Theme,
  WithStyles,
  Container,
  Grid,
  withStyles,
} from "@material-ui/core";

// component digital news
import { MuiTypography } from "@components/index";

// styles ProductValues

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      overflow: "hidden",
      backgroundColor: theme.palette.secondary.light,
    },
    container: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(30),
      display: "flex",
      position: "relative",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 5),
    },
    image: {
      height: 55,
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    curvyLines: {
      pointerEvents: "none",
      position: "absolute",
      top: -180,
    },
  });

export interface ProductValuesProps {
  title?: string;
  values: Array<{
    img: string;
    name: string;
    description: string;
    alt: string;
  }>;
}

const ProductValues: React.SFC<ProductValuesProps &
  WithStyles<typeof styles>> = (props) => {
  const { classes, values, title } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/img/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />

        <Grid container spacing={5}>
          {title && (
            <Grid item xs={12} md={12}>
              <MuiTypography variant="h4" marked="center" align="center">
                {title}
              </MuiTypography>
            </Grid>
          )}
          {values.map((element, index) => (
            <Grid key={element.name + index.toString()} item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src={element.img}
                  alt={element.alt}
                />
                <MuiTypography variant="h6" className={classes.title}>
                  {element.name}
                </MuiTypography>
                <MuiTypography variant="h5">
                  {element.description}
                </MuiTypography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default withStyles(styles)(ProductValues);
