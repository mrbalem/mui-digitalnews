import * as React from "react";
import clsx from "clsx";
//[*] components digitalnews
import { MuiAppBar, MuiToolbar } from "../../components";
//[*] components material ui
import { Link } from "@material-ui/core";

//[*] style digitalnews
import { useAppAppBarStyles } from "../../styles";

export interface AppAppBarProps {
  title: string;
  /**
   * especifica los elementos de los items de rightItem
   */
  rightItem: Array<{ link: string; name: string }>;
  /**
   * The positioning type. The behavior of the different options is described in the MDN web docs. Note: sticky is not universally supported and will fall back to static when unavailable.
   */
  position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: "inherit" | "transparent" | "default" | "primary" | "secondary";
  /**
   * Especifica la posicion de los items de nav
   */
  centerItems?: Array<{ link: string; name: string }>;
}

/**
 * @author Rony cb
 * @version 1.0.1
 * AppAppBar componenent.
 */
const AppAppBar: React.SFC<AppAppBarProps> = (props) => {
  //console.log("componentClidren", props);
  const classes = useAppAppBarStyles({ titleSize: 24 });
  //[*] get classes
  const { title, color, rightItem, centerItems, position = "static" } = props;
  //[*] hooks active link
  const [actived, setActive] = React.useState(0);
  return (
    <div>
      <MuiAppBar color={color} position={position}>
        <MuiToolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/#"
          >
            {title}
          </Link>
          <div className={classes.right}>
            {rightItem.map((element, index) => (
              <Link
                key={element.name + index.toString()}
                color="inherit"
                variant="h6"
                underline="none"
                href={element.link}
                className={clsx(
                  classes.rightLink,
                  index + 1 === rightItem.length && classes.linkSecondary
                )}
              >
                {element.name}
              </Link>
            ))}
          </div>
        </MuiToolbar>
        {centerItems && (
          <div className={classes.nav}>
            <div className={classes.left} />
            {centerItems.map((ele, index) => (
              <Link
                key={ele.name + index.toString()}
                color="inherit"
                variant="h6"
                underline="none"
                onClick={() => setActive(index)}
                href={ele.link}
                className={clsx(
                  classes.rightLink,
                  actived === index && classes.linkSecondary
                )}
              >
                {ele.name}
              </Link>
            ))}
            <div className={classes.right} />
          </div>
        )}
      </MuiAppBar>
      {position === "fixed" && (
        <div
          className={clsx(
            centerItems ? classes.heightNav : classes.placeholder
          )}
        />
      )}
    </div>
  );
};

export default AppAppBar;
