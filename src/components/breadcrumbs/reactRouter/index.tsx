import * as React from "react";
import { Breadcrumbs, BreadcrumbsProps, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LinkRoute from "../../button/Link";

export interface BreadCrumbsRouteProps extends BreadcrumbsProps {
  /**
   * Especfica la locacion de la ruta
   */
  location: any;
  /**
   * espefica el nombre de la ruta actual
   */
  name: string;
}

/**
 * @author ronycb
 * @version 1.0.0
 * @param props necasario para el funcionamiento del componente
 */

const BreadCrumbsRoute: React.SFC<BreadCrumbsRouteProps> = (props) => {
  const { location, name, ...other } = props;
  const pathnames = location.pathname.split("/").filter((x: string) => x);
  return (
    <Breadcrumbs {...other} aria-label="breadcrumb">
      <LinkRoute style={{ display: "flex" }} color="inherit" to="/">
        <HomeIcon style={{ width: 20, height: 20, marginRight: 1 }} />
        Inicio
      </LinkRoute>
      {pathnames.map(
        (ele: any, index: number) => (
          // index === 0 ? (
          //   <LinkRoute
          //     color="inherit"
          //     key={index.toString() + ele}
          //     to={`/${ele}`}
          //   >
          //     {ele}
          //   </LinkRoute>
          // ) : (
          <Typography key={index.toString() + ele} color="textPrimary">
            {ele}
          </Typography>
        )
        // )
      )}
      {/* <Typography color="textPrimary">{name}</Typography> */}
    </Breadcrumbs>
  );
};

export default BreadCrumbsRoute;
