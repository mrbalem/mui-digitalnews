import * as React from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  Container,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";

//[*] style ProductHeroLayout
const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.common.white,
      position: "relative",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("sm")]: {
        height: "80vh",
        minHeight: 500,
        maxHeight: 1300,
      },
    },
    container: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(14),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    backdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1,
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      zIndex: -2,
    },
    arrowDown: {
      position: "absolute",
      bottom: theme.spacing(4),
    },
  });

export interface ProductHeroLayoutProps {
  backgroundClassName: string;
  children: React.ReactNode;
  wonder: { url: string; alt: string };
  arrowDonw: { url: string; alt: string };
}

/**
 * @author rony cb
 * @version 1.0.0
 * @description ProductHeroLayout component
 */
const ProductHeroLayout: React.SFC<
  ProductHeroLayoutProps & WithStyles<typeof styles>
> = (props) => {
  // get props
  const { children, wonder, arrowDonw, backgroundClassName, classes } = props;
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={wonder.url} alt={wonder.alt} width="147" height="80" />
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
        <img
          className={classes.arrowDown}
          src={arrowDonw.url}
          height="16"
          width="12"
          alt={arrowDonw.alt}
        />
      </Container>
    </section>
  );
};

export default withStyles(styles)(ProductHeroLayout);
