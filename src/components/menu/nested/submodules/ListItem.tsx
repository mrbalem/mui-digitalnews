import * as React from "react";
import cx from "clsx";
import { MenuList, MenuListProps } from "@material-ui/core";
import { useCtxStyles } from "../StylesContext";

export interface LisItemProps extends MenuListProps {
  className: string;
  selected: boolean;
  level: number;
}

/**
 * @author Rony cb
 * @version 1.0.0
 * @param props Necesario para el funcionamiento de ListItem
 */

const LisItem: React.SFC<LisItemProps> = (props) => {
  const { className, selected, level, ...other } = props;
  const classes = useCtxStyles();
  return (
    <MenuList
      {...other}
      className={cx(
        classes.listItem,
        classes[`lv${level}Item`],
        selected && classes.listItemSelected,
        selected && classes[`lv${level}ItemSelected`],
        className
      )}
    />
  );
};

export default LisItem;
