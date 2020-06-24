import React, { FC } from "react";
import ProductCTA from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../libs/theme";
// eslint-disable-next-line import/no-default-export
export default { title: "CTA", component: ProductCTA };

export const Theme: FC = () => (
  <MuiThemeProvider theme={theme}>
    <ProductCTA
      title="recibe ofertas"
      description="Prueba las vacaciones de todos los días cerca de casa."
      portada="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
      onSubmit={() => new Promise((res) => res(true))}
    />
  </MuiThemeProvider>
);
