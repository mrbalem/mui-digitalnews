import * as React from "react";
import clsx from "clsx";
// components material ui
import {
  createStyles,
  Theme,
  WithStyles,
  Paper,
  PaperProps,
  capitalize,
} from "@material-ui/core";

// styles MuiPaper

const styles = (theme: Theme) =>
  createStyles({
    backgroundLight: {
      backgroundColor: theme.palette.secondary.light,
    },
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
  background: "light" | "main" | "dark";
  /**
   * defined classname for paper
   */
  className: string;
  /**
   * defined padding for paper
   */
  padding: boolean;
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

  const _getBackground = (background: "light" | "main" | "dark") => {
    switch (background) {
      case "dark":
        return "backgroundLight";
      case "light":
        return "backgroundMain";
      case "main":
        return "backgroundDark";
      default:
        return "backgroundLight";
    }
  };

  return (
    <Paper
      elevation={0}
      square
      {...other}
      className={clsx(
        //classes[`background${_getBackground(background)}`],
        { [classes.padding]: padding },
        className
      )}
    />
  );
};
export default MuiPaper;
