import React, { FC } from "react";
import AppFooter from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../libs/theme";
// eslint-disable-next-line import/no-default-export
export default { title: "Footer", component: AppFooter };

export const Theme: FC = () => (
  <MuiThemeProvider theme={theme}>
    <AppFooter />
  </MuiThemeProvider>
);
