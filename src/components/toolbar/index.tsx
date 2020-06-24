//[*] components material ui
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 64,
      [theme.breakpoints.up("sm")]: {
        height: 70,
      },
    },
  });

export default withStyles(styles)(Toolbar);
