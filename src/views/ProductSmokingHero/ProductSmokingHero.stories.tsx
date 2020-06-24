import React, { FC } from "react";
import ProductSmokingHero from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../libs/theme";
// eslint-disable-next-line import/no-default-export
export default { title: "Help", component: ProductSmokingHero };

export const Theme: FC = () => (
  <MuiThemeProvider theme={theme}>
    <ProductSmokingHero />
  </MuiThemeProvider>
);
