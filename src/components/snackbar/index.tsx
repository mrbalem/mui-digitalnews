import * as React from "react";

// component material ui
import {
  createStyles,
  Theme,
  WithStyles,
  Snackbar,
  IconButton,
  SlideProps,
  Slide,
  SnackbarProps,
  withStyles,
} from "@material-ui/core";

// icons material ui
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";

// styles MuiSnackbar
const styles = (theme: Theme) =>
  createStyles({
    content: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.text.primary,
      flexWrap: "inherit",
      [theme.breakpoints.up("md")]: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      },
    },
    contentError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      flexWrap: "inherit",
      [theme.breakpoints.up("md")]: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      },
    },
    contentMessage: {
      fontSize: 16,
      display: "flex",
      alignItems: "center",
    },
    contentAction: {
      paddingLeft: theme.spacing(2),
    },
    info: {
      flexShrink: 0,
      marginRight: theme.spacing(2),
    },
    close: {
      padding: theme.spacing(1),
    },
  });

export interface MuiSnackbarProps extends SnackbarProps {
  message: string;
  onClose: () => void;
  error?: boolean;
}

function Transition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

/**
 * @author Ronu cb
 * @version 1.0.2
 */
const MuiSnackbar: React.SFC<MuiSnackbarProps & WithStyles<typeof styles>> = (
  props
) => {
  const {
    classes,
    onClose,
    error,
    autoHideDuration = 6000,
    message,
    ...other
  } = props;
  return (
    <Snackbar
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={autoHideDuration}
      TransitionComponent={Transition}
      ContentProps={{
        classes: {
          root: error ? classes.contentError : classes.content,
          message: classes.contentMessage,
          action: classes.contentAction,
        },
      }}
      message={
        <React.Fragment>
          <InfoIcon className={classes.info} />
          <span>{message}</span>
        </React.Fragment>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
      {...other}
    />
  );
};

export default withStyles(styles)(MuiSnackbar);
