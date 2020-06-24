import * as React from "react";
import productHeroWonder from "./productHeroWonder.png";
import productHeroArrowDown from "./productHeroArrowDown.png";

//[*] component digital news
import ProductHeroLayout from "../ProductHeroLayout";
import { MuiTypography, MuiButton } from "../../components";
import { useProductHeroStyle } from "../../styles";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

export interface ProductHeroProps {
  title: string;
  description: string;
  backgroundProtada?: string;
}

/**
 *
 * @author Rony cb
 * @version 1.0.0
 * Theme component ProductHero
 */

const ProductHero: React.SFC<ProductHeroProps> = (props) => {
  const classes = useProductHeroStyle({
    backgroundImage: props.backgroundProtada || backgroundImage,
  });
  const { title, description } = props;
  return (
    <ProductHeroLayout
      wonder={{ url: productHeroWonder, alt: "dfsdf" }}
      arrowDonw={{ url: productHeroArrowDown, alt: "dasda" }}
      backgroundClassName={classes.background}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <MuiTypography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
      >
        {title}
      </MuiTypography>
      <MuiTypography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        {description}
      </MuiTypography>
      <MuiButton
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </MuiButton>
      <MuiTypography variant="body2" color="inherit" className={classes.more}>
        Descubre la experiencia
      </MuiTypography>
    </ProductHeroLayout>
  );
};

export default ProductHero;
