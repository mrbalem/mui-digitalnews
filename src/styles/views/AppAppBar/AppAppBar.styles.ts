import { Theme } from "@material-ui/core";
import { toolbarStyles } from "../../../components";

export type AppAppBarStyleProps = {
  titleSize?: number;
};

export type AppAppBarStyleClassKey = keyof ReturnType<typeof AppAppBarStyles>;

const AppAppBarStyles = (theme: Theme) => {
  return {
    title: ({ titleSize = 24 }) => ({
      fontSize: titleSize,
    }),
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      justifyContent: "space-between",
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
  };
};

export default AppAppBarStyles;
