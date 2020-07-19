import * as React from "react";
import clsx from "clsx";
//[*] components digitalnews
import { MuiAppBar, MuiToolbar } from "../../components/";

//[*] style digitalnews
import { useAppAppBarStyles } from "../../styles/";
import LinkRoute from "../../components/button/Link/";
import { Tabs, Tab } from "@material-ui/core";
import { getParameter } from "../../utils/http";
import Esqueleton from "../../components/squeleton";

export interface AppAppBarProps {
  title: string;
  /**
   * especifica los elementos de los items de rightItem
   */
  rightItem?: Array<{ link: string; name: string }>;
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
  centerItems?: Array<{ link: string; name: string; disabled?: boolean }>;
  /**
   * Especifica el logo de la empresa
   */
  logo?: { img: string; alt: string };
  /**
   * history expecifica el historial de las rutas
   */
  history?: any;

  /**
   * loading component
   */
  loading?: boolean;
}

/**
 * @author Rony cb
 * @version 1.0.1
 * AppAppBar componenent.
 */
const AppAppBar: React.FC<AppAppBarProps> = (props) => {
  //console.log("componentClidren", props);
  const classes = useAppAppBarStyles({ titleSize: 24 });
  //[*] get classes
  const {
    title,
    color,
    logo,
    history,
    rightItem,
    centerItems,
    position = "static",
    loading,
  } = props;

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
          <div className={classes.left}>
            {logo && (
              <img
                className={classes.logoImg}
                width={100}
                src={logo.img}
                alt={logo.alt}
              />
            )}
          </div>
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
          <LinkRoute
            variant="button"
            // onClick={handleClick}
            underline="none"
            color="inherit"
            className={classes.logoActive}
            to="/#"
          >
            {logo && <img width={100} src={logo.img} alt={logo.alt} />}
          </LinkRoute>
          <div className={classes.right}>
            {rightItem &&
              rightItem.map((element, index) => (
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
        {loading && (
          <div className={classes.nav}>
            <div className={classes.left} />
            <Esqueleton type="appbar" quantity={4} />
            <div className={classes.right} />
          </div>
        )}
        {centerItems && (
          <div className={classes.nav}>
            <div className={classes.left} />
            <Tabs
              value={parseInt(getParameter("actived")) || 0}
              // onChange={handleChange}
              textColor="inherit"
              className={classes.tabs}
              variant="scrollable"
              scrollButtons="auto"
            >
              {centerItems.map(
                (ele, index) => (
                  <Tab
                    // value={ele.name}
                    classes={{ root: classes.tapsRoot }}
                    disabled={ele.disabled}
                    // style={{ background: "red", width: 100 }}
                    onClick={() => history && history.push(ele.link)}
                    textColor="inherit"
                    key={ele.name + index.toString()}
                    className={
                      classes.rightLink
                      // ele.actived && classes.linkSecondary
                    }
                    label={ele.name}
                  />
                )
                /* <LinkRoute
                color="inherit"
                variant="h6"
                underline="none"
                // onClick={() => setActive(index)}
                to={ele.link}
                className={clsx(
                  classes.rightLink,
                  ele.actived && classes.linkSecondary
                )}
              >
                {ele.name}
              </LinkRoute> */
                // </Tab>
              )}

              {/* <Tab textColor="inherit" label="Juridicos" />
          <Tab textColor="inherit" label="Entidad del Estado" /> */}
            </Tabs>

            {/* {centerItems.map((ele, index) => (
              <LinkRoute
                key={ele.name + index.toString()}
                color="inherit"
                variant="h6"
                underline="none"
                // onClick={() => setActive(index)}
                to={ele.link}
                className={clsx(
                  classes.rightLink,
                  ele.actived && classes.linkSecondary
                )}
              >
                {ele.name}
              </LinkRoute>
            ))} */}
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
