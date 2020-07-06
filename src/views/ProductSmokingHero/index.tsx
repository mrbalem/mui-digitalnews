import * as React from "react";
import {
  createStyles,
  Theme,
  Container,
  WithStyles,
  Typography,
  Button,
  withStyles,
} from "@material-ui/core";
import { MuiTypography } from "@components/index";

// style ProductSmokingHero

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(9),
    },
    button: {
      border: "4px solid currentColor",
      borderRadius: 0,
      height: "auto",
      padding: theme.spacing(2, 5),
    },
    link: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up("xs")]: {
        textAlign: "center",
      },
    },
    buoy: {
      width: 60,
    },
  });

export interface ProductSmokingHeroProps {}

const ProductSmokingHero: React.SFC<ProductSmokingHeroProps &
  WithStyles<typeof styles>> = (props) => {
  const { classes } = props;
  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <MuiTypography variant="h4">
          ¿Tienes alguna pregunta? ¿Necesitas ayuda?
        </MuiTypography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        Estamos aquí para ayudar. ¡Ponerse en contacto!
      </Typography>
      <img
        src="/static/img/producBuoy.svg"
        className={classes.buoy}
        alt="buoy"
      />
    </Container>
  );
};

export default withStyles(styles)(ProductSmokingHero);
