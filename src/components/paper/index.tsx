import * as React from "react";
import clsx from "clsx";
// components material ui
import {
  createStyles,
  Theme,
  WithStyles,
  Paper,
  PaperProps,
  withStyles,
} from "@material-ui/core";

// interface ColorsMapping {
//   light: string;
//   main: string;
//   dark: string;
//   [key: string]: any;
// }

// interface Styles {
//   background?: string;
//   children?: React.ReactNode;
//   [key: string]: any;
// }

// const styledBy = (property: string, mapping: ColorsMapping) => (
//   props: Styles
// ) => mapping[props[property]];

// styles MuiPaper

const styles = (theme: Theme) =>
  createStyles({
    // backgroundLight: styledBy("background", {
    //   light: theme.palette.secondary.light,
    //   main: theme.palette.secondary.main,
    //   dark: theme.palette.secondary.dark,
    // }),
    backgroundLight: { backgroundColor: theme.palette.secondary.light },
    backgroundMain: {
      backgroundColor: theme.palette.secondary.main,
    },
    backgroundDark: {
      backgroundColor: theme.palette.secondary.dark,
    },
    padding: {
      padding: theme.spacing(1),
    },
  });

/**
 * more information for props paper
 * @see https://material-ui.com/es/api/paper/
 */
export interface MuiPaperProps extends PaperProps {
  /**
   * defined background for paper
   */
  background?: "light" | "main" | "dark";
  /**
   * defined classname for paper
   */
  className?: string;
  /**
   * defined padding for paper
   */
  padding?: boolean;
}

/**
 * @author Rony cb
 * @version 1.0.0
 * @description component views paper
 * @param props needs for rules of the components
 */

const MuiPaper: React.SFC<MuiPaperProps & WithStyles<typeof styles>> = (
  props
) => {
  const {
    background = "light",
    classes,
    className,
    padding = false,
    ...other
  } = props;

  return (
    <Paper
      elevation={0}
      square
      className={clsx(
        {
          [classes.backgroundDark]: background === "dark",
          [classes.backgroundMain]: background === "main",
          [classes.backgroundLight]: background === "light",
        },
        //classes[`background${_getBackground(background)}`],
        { [classes.padding]: padding },
        className
      )}
      {...other}
    />
  );
};
export default withStyles(styles)(MuiPaper);
