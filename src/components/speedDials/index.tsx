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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltipLabel: {
      minWidth: 205,
    },
    exampleWrapper: {
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
  { icon: <FeedbackIcon />, name: "Enviar Feedback" },
  { icon: <EmailIcon />, name: "Enviar correo electronico" },
  { icon: <FacebookIcon />, name: "Contactar por Facebook" },
  { icon: <WhatsAppIcon />, name: "Contactar por whatsApp" },
];

/**
 * @author Ronycb
 * @components SpeedDials
 * @version 1.0.0
 */

export default function SpeedDials() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
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
            classes={{
              staticTooltipLabel: classes.tooltipLabel,
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
