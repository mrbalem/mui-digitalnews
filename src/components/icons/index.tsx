import React from "react";
import clsx from "clsx";

// components material ui
import { Theme, Icon as MuiIcon, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(({ palette, transitions, spacing }: Theme) => {
  const invertedColor = palette.common.white;
  return {
    "bg-primary": {
      backgroundColor: palette.primary.main,
      color: invertedColor,
    },
    root: {
      // STANDALONE
      verticalAlign: "sub",
      "&.-push-left": {
        marginLeft: spacing(1),
      },
      "&.-push-right": {
        marginRight: spacing(1),
      },
      "&.-link": {
        cursor: "pointer",
        '&:not([class*="-color"])': {
          color: palette.text.primary,
        },
        transition: transitions.create(""),
        "&:hover": {
          transform: "scale(1.2)",
        },
      },
      // colors
      "&.-color-success": {
        color: "#28a745",
      },
      "&.-color-danger": {
        color: palette.error.main,
      },
      "&.-inverted": {
        color: invertedColor,
      },
      // icon
      "& .MuiIcon--fa": {
        verticalAlign: "unset",
        padding: 2,
        "&.svg-inline--fa": {
          width: "1em",
        },
      },
      "& i.MuiIcon--fa": {
        display: "block",
        "&:before": {
          display: "block",
          fontSize: 20,
        },
      },
    },
    // -------------------------------
    // sizes
    "&.-size-small": {
      fontSize: 20,
      "& i.MuiIcon--fa:before": {
        fontSize: 16,
      },
    },
    "&.-size-big": {
      fontSize: 28,
      "& i.MuiIcon--fa:before": {
        fontSize: 24,
      },
    },
    "&.-size-large": {
      fontSize: 32,
      "& i.MuiIcon--fa:before": {
        fontSize: 28,
      },
    },
    // background
    '&[class*="-bg"]': {
      width: "1.5em",
      height: "1.5em",
      padding: "0.25em",
    },
    "&.-bg-default": {
      backgroundColor: palette.grey[200],
    },
    "&.-bg-primary": {
      backgroundColor: palette.primary.main,
      color: invertedColor,
    },
    "&.-bg-secondary": {
      backgroundColor: palette.secondary.main,
      color: invertedColor,
    },
    "&.-bg-danger": {
      backgroundColor: palette.error.main,
      color: invertedColor,
    },
    "&.-bg-white": {
      backgroundColor: invertedColor,
    },
    "&.-bg-lightPrimary": {
      backgroundColor: palette.primary.light,
    },
    "&.-bg-lightSecondary": {
      backgroundColor: palette.secondary.light,
    },
    // shapes
    "&.-shape-square": {
      borderRadius: 0,
    },
    "&.-shape-circular": {
      borderRadius: "50%",
    },
    "&.-shape-round": {
      borderRadius: 4,
    }, // COMBINATION
    "&.-bg-default.-link.-inverted": {
      color: palette.text.primary,
    },
    '&.-link.-inverted:not([class*="-color"])': {
      color: invertedColor,
    },
  };
});

// styles Icons
// const styles = ({ palette, transitions, spacing }: Theme) => {
//   const invertedColor = palette.common.white;
//   return createStyles({
//     root: {
//       // STANDALONE
//       verticalAlign: "sub",
//       "&.-push-left": {
//         marginLeft: spacing(1),
//       },
//       "&.-push-right": {
//         marginRight: spacing(1),
//       },
//       "&.-link": {
//         cursor: "pointer",
//         '&:not([class*="-color"])': {
//           color: palette.text.primary,
//         },
//         transition: transitions.create(""),
//         "&:hover": {
//           transform: "scale(1.2)",
//         },
//       },
//       // colors
//       "&.-color-success": {
//         color: "#28a745",
//       },
//       "&.-color-danger": {
//         color: palette.error.main,
//       },
//       "&.-inverted": {
//         color: invertedColor,
//       },
//       // icon
//       "& .MuiIcon--fa": {
//         verticalAlign: "unset",
//         padding: 2,
//         "&.svg-inline--fa": {
//           width: "1em",
//         },
//       },
//       "& i.MuiIcon--fa": {
//         display: "block",
//         "&:before": {
//           display: "block",
//           fontSize: 20,
//         },
//       },
//     },
//     // -------------------------------
//     // sizes
//     "&.-size-small": {
//       fontSize: 20,
//       "& i.MuiIcon--fa:before": {
//         fontSize: 16,
//       },
//     },
//     "&.-size-big": {
//       fontSize: 28,
//       "& i.MuiIcon--fa:before": {
//         fontSize: 24,
//       },
//     },
//     "&.-size-large": {
//       fontSize: 32,
//       "& i.MuiIcon--fa:before": {
//         fontSize: 28,
//       },
//     },
//     // background
//     '&[class*="-bg"]': {
//       width: "1.5em",
//       height: "1.5em",
//       padding: "0.25em",
//     },
//     "&.-bg-default": {
//       backgroundColor: palette.grey[200],
//     },
//     "&.-bg-primary": {
//       backgroundColor: palette.primary.main,
//       color: invertedColor,
//     },
//     "&.-bg-secondary": {
//       backgroundColor: palette.secondary.main,
//       color: invertedColor,
//     },
//     "&.-bg-danger": {
//       backgroundColor: palette.error.main,
//       color: invertedColor,
//     },
//     "&.-bg-white": {
//       backgroundColor: invertedColor,
//     },
//     "&.-bg-lightPrimary": {
//       backgroundColor: palette.primary.light,
//     },
//     "&.-bg-lightSecondary": {
//       backgroundColor: palette.secondary.light,
//     },
//     // shapes
//     "&.-shape-square": {
//       borderRadius: 0,
//     },
//     "&.-shape-circular": {
//       borderRadius: "50%",
//     },
//     "&.-shape-round": {
//       borderRadius: 4,
//     }, // COMBINATION
//     "&.-bg-default.-link.-inverted": {
//       color: palette.text.primary,
//     },
//     '&.-link.-inverted:not([class*="-color"])': {
//       color: invertedColor,
//     },
//   });
// };

// color props
type colorProps =
  | "inherit"
  | "primary"
  | "secondary"
  | "action"
  | "error"
  | "disabled"
  | "danger"
  | "success"
  | "";
/**
 * @param color color a inyectar
 */
const injectColor = (color: colorProps) => {
  if (
    color === "inherit" ||
    color === "primary" ||
    color === "secondary" ||
    color === "action" ||
    color === "error" ||
    color === "disabled"
  ) {
    return color;
  }
  return undefined;
};

export interface IconsProps {
  bgColor?:
    | ""
    | "default"
    | "primary"
    | "secondary"
    // custom
    | "danger"
    | "white";
  className?: string;
  children?: React.ReactNode;
  color?: colorProps;
  fontAwesomeProps?: any;
  icon?: string;
  inverted?: boolean;
  link?: boolean;
  push?: "" | "left" | "right";
  size?: "small" | "big" | "large";
  shape?: "" | "square" | "circular" | "round";
}

/**
 * @version 1.1
 * @author RonyCb
 * @author mui-treasury
 * @see https://mui-treasury.com/
 *
 * vX.Y meaning
 * X = major changes ex. add/remove/rename some props/className,
 *     could affect other components
 * Y = minor changes ex. fix bug or internal logic, won't effect other component
 */

const Icons: React.SFC<IconsProps> = (props) => {
  const classes: any = useStyle();
  //[*] default props
  const {
    bgColor = "",
    className = "",
    children = null,
    color = "",
    fontAwesomeProps = {},
    icon = "",
    inverted = false,
    link = false,
    push = "",
    size = "",
    shape = "",
  } = props;
  console.log(`-bg-${bgColor}`);
  const mainIcon: any = children || icon;
  return (
    <MuiIcon
      component={link ? "a" : "span"}
      className={clsx(
        "MuiIcon-root",
        className,
        classes[`&-bg-${bgColor}`],
        classes.root,
        color && `-color-${color}`,
        inverted && "-inverted",
        link && "-link",
        push && `-push-${push}`,
        shape && `-shape-${shape}`,
        size && `-size-${size}`
      )}
      color={injectColor(color)}
    >
      {mainIcon.includes("fa-") ? (
        <i className={clsx("MuiIcon--fa", mainIcon)} {...fontAwesomeProps} />
      ) : (
        mainIcon
      )}
    </MuiIcon>
  );
};

export default Icons;
