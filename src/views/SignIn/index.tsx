import * as React from "react";

// components material
import {
  Grid,
  Typography,
  FormControl,
  Button,
  Hidden,
  LinearProgress,
} from "@material-ui/core/";
import { useSignInStyles } from "../../styles";
import { Forms } from "easyformui";
import { WithRootConnet } from "../../context/connect";
import { MuiSnackbar } from "../../components";
import { auth } from "../../utils/fiebase";

const cover =
  "https://media.wired.com/photos/59273cc6cefba457b079c810/master/pass/FFZERO1_029.jpg";

export interface SingInProps extends WithRootConnet {
  portada: { title: string; subtitle: string; message: string };
  cover?: string;
  title: string;
}

const SingIn: React.SFC<SingInProps> = (props) => {
  const classes = useSignInStyles({ cover: props.cover || cover });
  const { portada, title, actions } = props;

  //[*] hoooks para mostrar el error
  const [error, setError] = React.useState({ open: false, message: "" });

  //[*] hooks active loading for onsubmit
  const [isLoading, setLoading] = React.useState(false);

  //[*] ocultar el mensaje de error
  const handleClose = () => {
    setError((prev) => ({ ...prev, open: false }));
  };

  const authentication = async ({ username, password }: any) => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(username, password);
      let user = auth().currentUser;
      if (user) {
        setLoading(false);
        actions.signInAdmin(user.uid);
        // redired && history.push(redired(user.uid));
      } else {
        setLoading(false);
        setError({
          open: true,
          message: "Ocurrio un error inesperado.",
        });
      }
    } catch (error) {
      setLoading(false);
      switch (error.code) {
        case "auth/user-not-found":
          setError({
            open: true,
            message:
              "No hay registro de usuario correspondiente a este identificador.",
          });
          break;
        case "auth/wrong-password":
          setError({
            open: true,
            message:
              "La contraseña no es válida o el usuario no tiene una contraseña.",
          });
          break;
        default:
          alert(error.code);
      }
    }
  };

  return (
    <Grid className={classes.root} container>
      <Hidden smUp>
        <div className={"DL01-mobileCover"}>
          <div className={"DL01-cover"} />
        </div>
      </Hidden>
      <Hidden only={"xs"}>
        <Grid
          container
          alignItems={"center"}
          item
          sm={6}
          md={7}
          className={classes.item}
        >
          <div className={"DL01-cover"} />
          <div className={"DL01-content"}>
            <Typography variant={"h3"} className={"DL01-brand"} gutterBottom>
              {portada.title}
            </Typography>
            <Typography>{portada.subtitle}</Typography>
            <br />
            <Typography className={"DL01-description"}>
              {portada.message}
            </Typography>
          </div>
        </Grid>
      </Hidden>

      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        direction={"column"}
        item
        xs={12}
        sm={6}
        md={5}
        className={classes.form}
      >
        <div className={"DL01-form"}>
          {isLoading && (
            <LinearProgress
              style={{ position: "absolute", top: 0, right: 0, width: "41.7%" }}
            />
          )}
          <img
            alt={"logo"}
            className={"DL01-logo"}
            src={
              "https://images.vexels.com/media/users/3/144356/isolated/preview/52fb168f1bd3abf7e97a8e9bfdac331d-speed-car-logo-by-vexels.png"
            }
          />
          <Typography color={"textSecondary"}>{title}</Typography>
          <br />
          <Forms
            onSubmit={authentication}
            variant="filled"
            form={[
              {
                name: "username",
                label: "Correo",
                md: 12,
                validation: true,
                type: "email",
              },
              {
                name: "password",
                label: "Contraseña",
                md: 12,
                validation: true,
                type: "password",
              },
              {
                name: "remenber",
                label: "Remember Me",
                md: 6,
                type: "checkbox",
              },
            ]}
          >
            {(isSubmitting) => (
              <FormControl margin="none" fullWidth>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  fullWidth
                  variant={"contained"}
                  color={"primary"}
                >
                  Ingresar
                </Button>
              </FormControl>
            )}
          </Forms>

          {/* <Typography className={"DL01-signUp"}>
            Don't have an account ? <Link>Sign Up Now</Link>
          </Typography> */}
        </div>
      </Grid>
      <MuiSnackbar
        open={error.open}
        onClose={handleClose}
        message={error.message}
      />
    </Grid>
  );
};

export default SingIn;
