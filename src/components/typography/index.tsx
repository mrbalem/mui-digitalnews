import * as React from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  Typography,
  withStyles,
  TypographyProps,
} from "@material-ui/core";
import clsx from "clsx";
import { Variant } from "@material-ui/core/styles/createTypography";

// styles MuiTypography
const styles = (theme: Theme) =>
  createStyles({
    markedH2Center: {
      height: 4,
      width: 73,
      display: "block",
      margin: `${theme.spacing(1)}px auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    markedH3Center: {
      height: 4,
      width: 55,
      display: "block",
      margin: `${theme.spacing(1)}px auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    markedH4Center: {
      height: 4,
      width: 55,
      display: "block",
      margin: `${theme.spacing(1)}px auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    markedH6Left: {
      height: 2,
      width: 28,
      display: "block",
      marginTop: theme.spacing(0.5),
      background: "currentColor",
    },
  });

const variantMapping = {
  h1: "h1",
  h2: "h1",
  h3: "h1",
  h4: "h1",
  h5: "h3",
  h6: "h2",
  subtitle1: "h3",
};

export interface MuiTypographyProps extends TypographyProps {
  children: React.ReactNode;
  marked?: "center" | "left";
  //component?: string;
  variant: Variant;
}

const MuiTypography: React.SFC<
  MuiTypographyProps & WithStyles<typeof styles>
> = (props) => {
  // get props
  const { children, marked, classes, variant, ...other } = props;

  /**
   *@description determinar la posicion del markedStyle
   */
  const getMarkedStyle = (variant: Variant, marked: "center" | "left") => {
    if (variant === "h2" && marked === "center") return "markedH2Center";
    if (variant === "h3" && marked === "center") return "markedH3Center";
    if (variant === "h4" && marked === "center") return "markedH4Center";
    if (variant === "h6" && marked === "left") return "markedH6Left";
    return "markedH2Center";
  };

  return (
    <Typography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {marked ? (
        <span className={clsx(classes[getMarkedStyle(variant, marked)])} />
      ) : null}
    </Typography>
  );
};

export default withStyles(styles)(MuiTypography);
