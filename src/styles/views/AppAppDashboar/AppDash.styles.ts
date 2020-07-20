import { createStyles, Theme } from "@material-ui/core";

/**
 * style for appapp dashboar style
 */
const AppDashBoarStyle = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    main: {
      flex: 1,
      width: "100%",
      padding: theme.spacing(6, 6),
      background: "#eaeff1",
      [theme.breakpoints.down("xs")]: {
        marginTop: "-1%",
        padding: theme.spacing(2, 1),
      },
    },
    table: {
      [theme.breakpoints.down("xs")]: {
        width: 396,
      },
    },
    tabs: {
      [theme.breakpoints.down("xs")]: {
        maxWidth: 400,
        paddingRight: 20,
      },
    },
    buttton: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    block: {
      display: "block",
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
  });

export default AppDashBoarStyle;
