import * as React from "react";
import clsx from "clsx";
//[*] components digitalnews
import { MuiAppBar, MuiToolbar } from "../../components";
//[*] components material ui
import { Link } from "@material-ui/core";

//[*] style digitalnews
import { useAppAppBarStyles } from "../../styles";
import LinkRoute from "../../components/button/Link";

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

  // const handleClick = (
  //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  // ) => {
  //   event.preventDefault();
  //   //index && setActive(index);
  // };
  return (
    <div>
      <MuiAppBar color={color} position={position}>
        <MuiToolbar className={classes.toolbar}>
          <div className={classes.left} />
          <LinkRoute
            variant="h6"
            // onClick={handleClick}
            underline="none"
            color="inherit"
            className={classes.title}
            to="/#"
          >
            {title}
          </LinkRoute>
          <div className={classes.right}>
            {rightItem.map((element, index) => (
              <LinkRoute
                key={element.name + index.toString()}
                color="inherit"
                variant="h6"
                underline="none"
                to={element.link}
                className={clsx(
                  classes.rightLink,
                  index + 1 === rightItem.length && classes.linkSecondary
                )}
              >
                {element.name}
              </LinkRoute>
            ))}
          </div>
        </MuiToolbar>
        {centerItems && (
          <div className={classes.nav}>
            <div className={classes.left} />
            {centerItems.map((ele, index) => (
              <LinkRoute
                key={ele.name + index.toString()}
                color="inherit"
                variant="h6"
                underline="none"
                onClick={() => setActive(index)}
                to={ele.link}
                className={clsx(
                  classes.rightLink,
                  actived === index && classes.linkSecondary
                )}
              >
                {ele.name}
              </LinkRoute>
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
