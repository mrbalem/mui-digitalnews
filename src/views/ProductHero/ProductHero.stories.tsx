import React, { FC } from "react";
import ProductHero from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../libs/theme";
// eslint-disable-next-line import/no-default-export
export default { title: "Portada", component: ProductHero };

export const Theme: FC = () => (
  <MuiThemeProvider theme={theme}>
    <ProductHero
      title="actualiza tus domingos"
      description="Disfrute de ofertas secretas de hasta -70% de descuento en los mejores hoteles de lujo todos los domingos."
    />
  </MuiThemeProvider>
);
