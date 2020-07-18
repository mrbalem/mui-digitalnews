import * as React from "react";
import connect, { WithRootConnet } from "../../context/connect";
import { CircularProgress } from "@material-ui/core";
import { auth } from "../../utils/fiebase";
import { MuiSnackbar } from "../../components";

export interface SingOutProps extends WithRootConnet {}

/**
 * @author Rony cb
 * @version 1.0.0
 */
const SingOut: React.SFC<SingOutProps> = (props) => {
  const { actions, history } = props;
  const [error, setError] = React.useState({ status: false, message: "" });

  const handleClose = () => {
    setError({ status: false, message: "" });
  };

  React.useEffect(() => {
    const loguot = async () => {
      try {
        await auth().signOut();
        actions.signOut();
        history.push("/sign-in");
      } catch (error) {
        console.error(error);
        setError({
          status: true,
          message:
            "ocurrio un error inesperado al cerrar la sesión, por favor intentelo mas tarde",
        });
        history.goBack();
      }
    };
    loguot();
  }, [actions, history]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#eaeff1",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
      <h4 style={{ padding: 10 }}>saliendo...</h4>
      <MuiSnackbar
        open={error.status}
        onClose={handleClose}
        message={error.message}
      />
    </div>
  );
};

export default connect(SingOut);
