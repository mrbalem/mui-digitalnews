import React, { FC } from "react";
import ProductValues from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../libs/theme";
// eslint-disable-next-line import/no-default-export
export default { title: "Values", component: ProductValues };

export const Theme: FC = () => (
  <MuiThemeProvider theme={theme}>
    <ProductValues
      values={[
        {
          name: "los mejores hoteles de lujo",
          description:
            "Desde el último hotel boutique de moda hasta el emblemático palacio con piscina XXL , vaya de vacaciones a unas pocas paradas de metro de su hogar.",
          alt: "hoteles",
          img: "/static/img/prueba.svg",
        },
        {
          name: "nuevas experiencias",
          description:
            "Privatice una piscina, tome un baño japonés o despiértese en un jardín de 900 m2 ... sus domingos no serán iguales.",
          alt: "experiencia",
          img: "/static/img/productValues2.svg",
        },
        {
          name: "TARIFAS EXCLUSIVAS",
          description:
            "Al registrarse, accederá a tarifas negociadas especialmente que no encontrará en ningún otro lugar.",
          alt: "trifas",
          img: "/static/img/productValues3.svg",
        },
      ]}
    />
  </MuiThemeProvider>
);
