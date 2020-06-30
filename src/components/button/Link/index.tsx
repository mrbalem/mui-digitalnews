import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, LinkProps } from "@material-ui/core";

export interface LinkRouteProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRoute: React.SFC<LinkRouteProps> = (props) => {
  return <Link {...props} component={RouterLink as any} />;
};

export default LinkRoute;
