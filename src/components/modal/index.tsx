import * as React from "react";
import {
  Modal,
  Slide,
  Paper,
  IconButton,
  makeStyles,
  Theme,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./style.modal.scss";

type background =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  | "error";

const useStyle = makeStyles(({ palette }: Theme) => ({
  primary: {
    background: palette.primary.dark,
  },
  secondary: {
    background: palette.secondary.dark,
  },
  info: {
    background: palette.info.dark,
  },
  success: {
    background: palette.success.dark,
  },
  warning: {
    background: palette.warning.dark,
  },
  error: {
    background: palette.error.dark,
  },
}));

export interface MuiModalProps {
  open: boolean;
  title?: string;
  titleBackground?: background;
  onBackdropClick?: () => void;
  handleClose: () => void;
  children: React.ReactNode;
  direction?: "down" | "up" | "left" | "right";
}

const MuiModal: React.SFC<MuiModalProps> = (props) => {
  const {
    open,
    handleClose,
    children,
    direction,
    title,
    titleBackground = "primary",
    onBackdropClick,
  } = props;

  const classes = useStyle();
  //   const paperRef = React.useRef(null);
  return (
    <Modal
      className="modal"
      onBackdropClick={onBackdropClick}
      aria-labelledby="modal-title"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{ timeout: 500 }}
    >
      <Slide style={{ outline: "none" }} in={open} direction={direction}>
        <div style={{ width: "50%" }}>
          <Paper
            className="paper-movil"
            elevation={6}
            style={{
              outline: "none",
              borderRadius: "0.5em",
            }}
          >
            {title && (
              <>
                <div className={classes[titleBackground]}>
                  <div className="flex-center">
                    <h2 id="modal-title">{title}</h2>
                    <IconButton
                      size="medium"
                      color="inherit"
                      onClick={handleClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                </div>
                <br />
              </>
            )}
            <div style={{ padding: "0em 1em" }}>{children}</div>
          </Paper>
        </div>
      </Slide>
    </Modal>
  );
};

export default MuiModal;
