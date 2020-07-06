import React from "react";
import clsx from "clsx";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
// import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
// import PublicIcon from "@material-ui/icons/Public";
import BarChartIcon from "@material-ui/icons/BarChart";
// import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import SettingsIcon from "@material-ui/icons/Settings";
// import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Omit } from "@material-ui/types";
import LinkRoute from "../../../components/button/Link";
import { getParameter } from "../../../utils/http";

const categories = [
  {
    id: "Servicios",
    children: [
      {
        id: "Almacen",
        icon: <DnsRoundedIcon />,
        href: "/admin/home?page=almacen",
        active: 0,
      },
      {
        id: "Clientes",
        icon: <PeopleIcon />,
        href: "/admin/home/clients?page=clientes",
        active: 1,
      },
      {
        id: "Control",
        icon: <SettingsIcon />,
        href: "/admin/home?page=control",
        active: 2,
      },
      {
        id: "Reportes",
        icon: <BarChartIcon />,
        href: "/admin/home?page=reporte",
        active: 3,
      },
      // { id: "Functions", icon: <SettingsEthernetIcon /> },
      // { id: "ML Kit", icon: <SettingsInputComponentIcon /> },
    ],
  },
  {
    id: "Datos",
    children: [
      {
        id: "Perfil",
        icon: <AccountCircleIcon />,
        href: "/admin/home?page=perfil",
        active: 4,
      },
      {
        id: "Usuarios",
        icon: <GroupAddIcon />,
        href: "/admin/home?page=usuarios",
        active: 5,
      },
      { id: "Salir", icon: <ExitToAppIcon />, href: "/sign-out", active: 6 },
    ],
  },
];

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover,&:focus": {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      },
    },
    itemCategory: {
      backgroundColor: "#232f3e",
      boxShadow: "0 -1px 0 #404854 inset",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: "#4fc3f7",
    },
    itemPrimary: {
      fontSize: "inherit",
    },
    itemIcon: {
      minWidth: "auto",
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  });

export interface NavigatorProps
  extends Omit<DrawerProps, "classes">,
    WithStyles<typeof styles> {}

function Navigator(props: NavigatorProps) {
  const { classes, ...other } = props;

  //[*] agetActive menu
  const getActive = (value: string) => {
    switch (value) {
      case "almacen":
        return 0;
      case "clientes":
        return 1;
      case "control":
        return 2;
      case "reporte":
        return 3;
      case "perfil":
        return 4;
      case "usuarios":
        return 5;
      default:
        return 0;
    }
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          <img
            style={{ marginRight: 10, marginTop: -4 }}
            width={28}
            height={25}
            src="https://www.ink-grid.com/static/media/logo.5beba63a.png"
            alt="ink-grid"
          ></img>
          Ink-grid
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Nevado-store
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, href }) => (
              <LinkRoute
                underline="none"
                color="inherit"
                key={childId}
                to={href}
              >
                <ListItem
                  // button
                  className={clsx(
                    classes.item,
                    active === getActive(getParameter("page")) &&
                      classes.itemActiveItem
                  )}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </LinkRoute>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);
