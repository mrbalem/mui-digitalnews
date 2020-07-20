import * as React from "react";
import MaterialTable, {
  MaterialTableProps,
  MTableToolbar,
  MTableEditField,
} from "material-table";
import {
  AppBar,
  makeStyles,
  Theme,
  FormControl,
  FormHelperText,
  // Tooltip,
  // IconButton,
  // Button,
  // Icon,
} from "@material-ui/core";
// import RefreshIcon from "@material-ui/icons/Refresh";
// import DeleteIcon from "@material-ui/icons/Delete";
import useBreakpoint from "../../utils/hooks";

export interface TableProps extends MaterialTableProps<any> {
  error?: boolean;
  placeholder?: string;
}

const useStyle = makeStyles((theme: Theme) => ({
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttton: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  block: {
    display: "block",
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
}));

/**
 * @version 1.0.0
 * @param obj es el contenido de las campos
 * @param cantidad la cantidad de campos en el formulario
 * @param setError Es la accion que determina de que campo esta
 * vacio
 */

export const captureError = (
  obj: any,
  cantidad: number,
  setError: React.Dispatch<any>
) => {
  let isEmpty = false;
  let keys = Object.keys(obj);
  if (keys.length < cantidad) {
    setError(true);
    return Promise.reject();
  }
  Object.values(obj).forEach((e: any) => {
    if (e.length === 0 || !e || e === "") isEmpty = true;
  });
  if (isEmpty) {
    setError(true);
    return Promise.reject();
  }
};

/**
 * @author Rony cb
 * @version 1.0.0
 * @param props
 */
const Table: React.SFC<TableProps> = (props) => {
  const {
    options,
    columns,
    components,
    placeholder,
    data,
    error,
    ...other
  } = props;
  const classes = useStyle();
  //[*] breakppoinst hooks
  const bre = useBreakpoint();
  return (
    <MaterialTable
      {...other}
      components={{
        Toolbar: (props) => {
          return (
            <AppBar
              className={classes.searchBar}
              position="static"
              color="default"
              elevation={3}
            >
              <MTableToolbar {...props} />
            </AppBar>
          );
        },
        EditField: (props) => {
          return (
            <FormControl error={error && !props.value ? true : false}>
              <MTableEditField
                {...props}
                id={`component-${props.columnDef.title}`}
                aria-describedby="component-error-text"
              />
              {error && !props.value && (
                <FormHelperText id="component-error-text">
                  Campo nece...
                </FormHelperText>
              )}
            </FormControl>
          );
        },
        ...components,
        //     Actions: (props) => {
        //       console.log(props);
        //       const getUser = (action: any, data: any) => {
        //         if (typeof action === "function") {
        //           let element = action(data);
        //           console.log(element);
        //           return (
        //             <IconButton
        //               key={element.tooltip}
        //               size="small"
        //               onClick={element.onClick}
        //             >
        //               <Icon>{element.icon.render()}</Icon>
        //             </IconButton>
        //           );
        //         }
        //         switch (action.icon) {
        //           case "refresh":
        //             return (
        //               <Tooltip key={"dklskldkl"} title={action.tooltip}>
        //                 <IconButton onClick={action.onClick}>
        //                   <RefreshIcon className={classes.block} color="inherit" />
        //                 </IconButton>
        //               </Tooltip>
        //             );
        //           default:
        //             return (
        //               <Button
        //                 className={classes.buttton}
        //                 key={"buttonkey"}
        //                 onClick={action.onClick}
        //                 variant="contained"
        //                 color="primary"
        //               >
        //                 Ingresar Usuario
        //               </Button>
        //             );
        //         }
        //       };

        //       let action: any[] = [];
        //       if (props.actions) {
        //         props.actions.map((ele: any) => {
        //           action.unshift(getUser(ele, props.data));
        //         });
        //       }

        //       return <div>{action}</div>;
        //     },
      }}
      columns={columns}
      data={data}
      options={{
        draggable: false,
        emptyRowsWhenPaging: false,
        searchFieldStyle: {
          width: bre === "xs" || bre === "sm" ? 200 : 680,
        },
        ...options,
      }}
      localization={{
        body: {
          emptyDataSourceMessage: "No se econtro ningún resultado.",
          addTooltip: "Ingresar",
          deleteTooltip: "Eliminar",
          editTooltip: "Editar",
          editRow: {
            saveTooltip: "Guardar",
            cancelTooltip: "Cancelar",
            deleteText: "¿Estas seguro de eliminar esta fila?",
          },
        },
        toolbar: {
          searchTooltip: "buscar",
          searchPlaceholder:
            placeholder ||
            "Buscar por dirección de correo electrónico, número de teléfono o UID de usuario",
        },
        pagination: {
          labelRowsSelect: "filas",
          labelDisplayedRows: "{from}-{to} de {count}",
          firstTooltip: "Primera página",
          firstAriaLabel: "Primera página",
          labelRowsPerPage: "Filas por página",
          previousTooltip: "Pagina anterior",
          nextTooltip: "Siguiente página",
          lastTooltip: "Última página",
        },
        header: {
          actions: "Acciones",
        },
      }}
    />
  );
};

export default Table;
