import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import { MuiTypography, MuiButton } from "@components/index";
import { useProductHowItWorksStyle } from "@styles/index";

export interface ProductHowItWorksProps {
  /**
   * titulo para el componente
   */
  title: string;
  /**
   * redireccion a una url en especifica
   */
  redired?: string;
  /**
   * es el contenido a mostrar
   */
  process: Array<{ img: string; alt: string; description: string }>;
  /**
   * especifica el id del componente
   */
  id?: string;
  /**
   * inabilita la accion del booton
   */
  inactiveAction?: true;
}

/**
 * @author DigitalNews
 * @version 1.0.0
 * @param props necesarios para el funcionamiento del componente
 */

const ProductHowItWorks: React.SFC<ProductHowItWorksProps> = (props) => {
  const classes = useProductHowItWorksStyle();
  const { title, id, process, redired, inactiveAction = false } = props;
  return (
    <section id={id} className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/img/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <MuiTypography variant="h4" marked="center" className={classes.title}>
          {title}
        </MuiTypography>
        <div>
          <Grid container spacing={5}>
            {process.map((element, index) => (
              <Grid key={element.img + index.toString()} item xs={12} md={4}>
                <div className={classes.item}>
                  <div className={classes.number}>{index + 1}.</div>
                  <img
                    src={element.img}
                    alt={element.alt}
                    className={classes.image}
                  />
                  <MuiTypography variant="h5" align="center">
                    {element.description}
                  </MuiTypography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        {!inactiveAction && (
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <MuiButton
              color="secondary"
              size="large"
              variant="contained"
              className={classes.button}
              href={redired}
            >
              empezar
            </MuiButton>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductHowItWorks;
