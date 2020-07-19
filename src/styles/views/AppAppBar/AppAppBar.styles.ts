import { Theme, createStyles } from "@material-ui/core";
import { toolbarStyles } from "../../../components";

export type AppAppBarStyleProps = {
  titleSize?: number;
};

export type AppAppBarStyleClassKey = keyof ReturnType<typeof AppAppBarStyles>;

const AppAppBarStyles = (theme: Theme) =>
  createStyles({
    title: ({ titleSize = 24 }: AppAppBarStyleProps) => ({
      fontSize: titleSize,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    }),
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      justifyContent: "space-between",
    },

    tapsRoot: {
      minWidth: 72,
      marginRight: theme.spacing(1),
    },

    tabs: {
      [theme.breakpoints.down("xs")]: {
        maxWidth: 400,
        paddingRight: 20,
      },
    },
    logoActive: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    logoImg: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    left: {
      flex: 1,
    },
    leftLinkActive: {
      color: theme.palette.common.white,
    },
    right: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
    },
    rightLink: {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(3),
    },
    linkSecondary: {
      color: theme.palette.secondary.main,
    },
    nav: {
      display: "flex",
      paddingBottom: 10,
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    heightNav: {
      height: 105,
      [theme.breakpoints.down("xs")]: {
        height: 64,
      },
    },
  });

export default AppAppBarStyles;
