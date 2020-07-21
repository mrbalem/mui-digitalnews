import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import EmailIcon from "@material-ui/icons/Email";
import { Backdrop } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import FeedbackIcon from "@material-ui/icons/Feedback";
import Email from "./ui/email";
import Feedback from "./ui/feeback";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltipLabel: {
      minWidth: 205,
      [theme.breakpoints.down("xs")]: {
        minWidth: 220,
      },
    },
    exampleWrapper: {
      zIndex: 1000,
      position: "fixed",
      bottom: 0,
      right: 10,
      marginTop: theme.spacing(3),
    },

    speedDial: {
      position: "absolute",
      "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
  })
);

const actions = [
  {
    icon: <FeedbackIcon />,
    name: "Enviar Feedback",
    onClick: "feedback",
  },
  {
    icon: <EmailIcon />,
    name: "Recibir Contización",
    onClick: "email",
  },
  {
    icon: <FacebookIcon />,
    name: "Contactar por Facebook",
    onClick: "facebook",
  },
  {
    icon: <WhatsAppIcon />,
    name: "Contactar por whatsApp",
    onClick: "whatsapp",
  },
];

/**
 * @author Ronycb
 * @components SpeedDials
 * @version 1.0.0
 */

export default function SpeedDials() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //HOOKS OPEN EMAIL
  const [modal, setModal] = React.useState(false);

  //HOOKS OPEN FEEDBACK
  const [isFeedback, setFeedBack] = React.useState(false);

  const handleClose = (param: any) => {
    if (typeof param === "string" && param === "whatsapp")
      window.open(process.env.REACT_APP_LINK_WHATSAPP, "_blanck");
    if (typeof param === "string" && param === "facebook")
      window.open(process.env.REACT_APP_LINK_MESSENGER, "_blanck");
    if (typeof param === "string" && param === "email") setModal(true);
    if (typeof param === "string" && param === "feedback") setFeedBack(true);
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className={classes.exampleWrapper}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              style={{ zIndex: 6000 }}
              classes={{
                staticTooltipLabel: classes.tooltipLabel,
              }}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={() => handleClose(action.onClick)}
            />
          ))}
        </SpeedDial>
      </div>
      <Email isOpen={modal} setOpen={setModal} />
      <Feedback isOpen={isFeedback} setOpen={setFeedBack} />
    </>
  );
}
