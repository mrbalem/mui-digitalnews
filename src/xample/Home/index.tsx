import * as React from "react";
import WithRoot from "../../libs/withroot";
import AppAppBar from "../../views/appappbar";
import ProductHero from "../../views/ProductHero";
import ProductValues from "../../views/ProductValues";
import ProductCategories from "../../views/ProductCategories";
import ProductHowItWorks from "../../views/ProductHowItWorks";
import ProductCTA from "../../views/ProductCTA";
import ProductSmokingHero from "../../views/ProductSmokingHero";
import AppFooter from "../../views/AppFooter";

export interface PageHomeProps {}

/**
 *  @version 1.0.0
 *  @author Rony cb - Mrvalem
 *  @description Página de /index
 */

const PageHome: React.SFC<PageHomeProps> = () => {
  return (
    <>
      <AppAppBar
        title="gridmall"
        position="fixed"
        rightItem={[
          { link: "/#", name: "iniciar" },
          { link: "/#", name: "regístrate" },
        ]}
      />
      <ProductHero
        title="actualiza tus domingos"
        description="Disfrute de ofertas secretas de hasta -70% de descuento en los mejores hoteles de lujo todos los domingos."
      />
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
      <ProductCategories
        title="PARA TODOS LOS GUSTOS Y TODOS LOS DESEOS."
        images={[
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80",
            name: "Snorkeling",
            width: "40%",
          },
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80",
            name: "Massage",
            width: "20%",
          },
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80",
            name: "Hiking",
            width: "40%",
          },
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80",
            name: "Tour",
            width: "38%",
          },
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80",
            name: "Gastronomy",
            width: "38%",
          },
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80",
            name: "Shopping",
            width: "24%",
          },
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80",
            name: "Walking",
            width: "40%",
          },
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80",
            name: "Fitness",
            width: "20%",
          },
          {
            uid: Math.random().toString(),
            url:
              "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80",
            name: "Reading",
            width: "40%",
          },
        ]}
      />
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
      <ProductCTA
        title="recibe ofertas"
        description="Prueba las vacaciones de todos los días cerca de casa."
        portada="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
        onSubmit={() => new Promise((res) => res(true))}
      />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
};

export default WithRoot()(PageHome);
