import * as React from "react";
import { Container, Grid, Hidden } from "@material-ui/core";

//[*] material ui components
import {
  MuiTypography,
  MuiButton,
  MuiSnackbar,
  MuiTextField,
} from "../../components";

// style from component
import { useProductCtaStyle } from "../../styles";

export interface ProductCTAProps {
  /**
   *@description set email action for database
   */
  onSubmit: () => Promise<any>;
  /**
   * @description define title for views
   */
  title: string;
  /**
   * @description fenine description for views
   */
  description: string;
  /**
   * @description define portada for views
   */
  portada: string;
}

/**
 * @author Rony cb
 * @version 1.0.1
 * @param props i need necesario props info
 */

const ProductCTA: React.SFC<ProductCTAProps> = (props) => {
  const classes = useProductCtaStyle();
  const { portada, title, description, onSubmit } = props;
  const [open, setOpen] = React.useState({ status: false, message: "" });

  /**
   * @function handleSubmit
   * @param event Fom event
   * @description function action for onsubmiting email.
   */
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      onSubmit && (await onSubmit());
      setOpen({
        status: true,
        message: "Le enviaremos nuestras mejores ofertas, una vez por semana.",
      });
    } catch (error) {
      setOpen({
        status: true,
        message: "Ocurrio un error inesperado, por favor intentalo de nuevo.",
      });
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpen((prev) => ({ ...prev, status: false }));
  };
  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <MuiTypography variant="h2" gutterBottom>
                {title}
              </MuiTypography>
              <MuiTypography variant="h5">{description}</MuiTypography>
              <MuiTextField
                noBorder
                className={classes.textField}
                placeholder="Tu correo electrónico"
              />
              <MuiButton
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Mantenme informado
              </MuiButton>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img src={portada} alt="call to action" className={classes.image} />
          </Hidden>
        </Grid>
      </Grid>
      <MuiSnackbar
        open={open.status}
        onClose={handleClose}
        message={open.message}
      />
    </Container>
  );
};

export default ProductCTA;
