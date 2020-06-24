import React, { FC } from "react";
import ProductHowItWorks from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../libs/theme";
// eslint-disable-next-line import/no-default-export
export default { title: "Process", component: ProductHowItWorks };

export const Theme: FC = () => (
  <MuiThemeProvider theme={theme}>
    <ProductHowItWorks
      redired="/#"
      title="cómo funciona"
      process={[
        {
          description: "Cita todos los miércoles a las 9 a.m.",
          alt: "dasd",
          img: "/static/img/productHowItWorks1.svg",
        },
        {
          description:
            "Primero llegado, primero servido. Nuestras ofertas son en cantidades limitadas, así que sea rápido.",
          alt: "dasd",
          img: "/static/img/productHowItWorks2.svg",
        },
        {
          description:
            "Nuevas ofertas cada semana. Nuevas experiencias, nuevas sorpresas. Tus domingos ya no serán iguales.",
          alt: "dasd",
          img: "/static/img/productHowItWorks3.svg",
        },
      ]}
    />
  </MuiThemeProvider>
);
