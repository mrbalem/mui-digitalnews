import React, { FC } from "react";
import AppAppBar from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../libs/theme";

// eslint-disable-next-line import/no-default-export
export default { title: "AppBar", component: AppAppBar };

export const Theme1: FC = () => (
  <MuiThemeProvider theme={theme}>
    <AppAppBar
      title="gridmall"
      position="fixed"
      rightItem={[
        { link: "/#", name: "iniciar" },
        { link: "/#", name: "regístrate" },
      ]}
    />
  </MuiThemeProvider>
);
