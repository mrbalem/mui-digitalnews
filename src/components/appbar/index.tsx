import * as React from "react";
//[*]components material ui
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles,
} from "@material-ui/core/styles";
import { AppBar, AppBarProps } from "@material-ui/core";

//[*] style for MuiAppBar
const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      color: palette.common.white,
    },
  });

/**
 * @description for more props informatión, material ui.
 * @see https://material-ui.com/api/app-bar/#appbar-api
 */
interface MuiAppBarProps extends AppBarProps {}

type Props = MuiAppBarProps & WithStyles<typeof styles>;

/**
 * @author ronyCB
 * @version 1.0.0
 * @param props more information -> https://material-ui.com/api/app-bar/#appbar-api
 */
const MuiAppBar: React.SFC<Props> = (props) => {
  //[*] recuperamos los props
  const { classes, ...rest } = props;
  return <AppBar className={classes.root} elevation={0} {...rest} />;
};

export default withStyles(styles)(MuiAppBar) as React.ComponentType<
  MuiAppBarProps
>;
