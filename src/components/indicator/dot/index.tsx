import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";
import { dotIndicatorStyles } from "../../../styles";

const DotIndicator = withStyles(dotIndicatorStyles, {
  name: "DotIndicator",
})(({ active, className, classes, ...props }: any) => (
  <button
    type={"button"}
    tabIndex={0}
    className={cx(
      "DotIndicator-root",
      className,
      classes.root,
      active && `-active ${classes.active}`
    )}
    {...props}
  />
));
DotIndicator.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};
DotIndicator.defaultProps = {
  className: "",
  active: false,
};
DotIndicator.displayName = "DotIndicator";
export default DotIndicator;
