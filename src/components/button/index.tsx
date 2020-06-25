import * as React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

export default withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 0,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      padding: theme.spacing(2, 4),
      fontSize: theme.typography.pxToRem(14),
      boxShadow: "none",
      "&:active, &:focus": {
        boxShadow: "none",
      },
    },
    sizeSmall: {
      padding: theme.spacing(1, 3),
      fontSize: theme.typography.pxToRem(13),
    },
    sizeLarge: {
      padding: theme.spacing(2, 5),
      fontSize: theme.typography.pxToRem(16),
    },
  })
)(Button);

/**
 * button test
 */

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: "none",
    "&:active, &:focus": {
      boxShadow: "none",
    },
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  },
}));

export interface MuiButtonsProps extends ButtonProps {}

const MuiButtons: React.SFC<MuiButtonsProps> = (props) => {
  const classes = useStyle();
  const { ...other } = props;
  return (
    <Button
      classes={{
        root: classes.root,
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
      }}
      {...other}
    />
  );
};

export { MuiButtons };
