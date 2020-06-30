import * as React from "react";
import cx from "clsx";
import { useCtxStyles } from "../StylesContext";

export interface ParentProps {
  level: number;
  className: string;
  useStyles: () => any;
  active: boolean;
  collapsed: boolean;
}

const Parent: React.SFC<ParentProps> = (props) => {
  const {
    level,
    active,
    collapsed,
    className,
    useStyles = useCtxStyles,
    ...other
  } = props;
  const classes = useStyles();
  return (
    <div
      className={cx(
        classes.parent,
        active && classes[`parentActive`],
        collapsed && classes[`parentCollapsed`],
        level && classes[`lv${level}Parent`],
        active && classes[`lv${level}ParentActive`],
        collapsed && classes[`lv${level}ParentCollapsed`],
        className
      )}
      {...other}
    />
  );
};

export default Parent;
