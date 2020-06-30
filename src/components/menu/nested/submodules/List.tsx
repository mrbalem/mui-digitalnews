import * as React from "react";
import clx from "clsx";
import { MenuListProps, MenuList } from "@material-ui/core";
import { useCtxStyles } from "../StylesContext";

export interface ListProps extends MenuListProps {
  className: string;
  level: number;
}

/**
 * @author Rony cb
 * @version 1.0.0
 * @param props props necesario para el funcionamiento de List
 */

const List: React.SFC<ListProps> = (props) => {
  const { level, className, ...other } = props;
  const classes = useCtxStyles();
  return (
    <MenuList
      {...other}
      className={clx(classes.list, classes[`lv${level}List`], className)}
    />
  );
};

export default List;
