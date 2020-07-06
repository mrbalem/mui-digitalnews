import * as React from "react";
import { makeStyles, Container, Box } from "@material-ui/core";
import { MuiPaper } from "@components/index";

//[*] style for component
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: "url(/static/img/productCurvyLines.png)",
    backgroundRepeat: "no-repeat",
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 6),
    },
  },
}));

export interface AppFormProps {
  /**
   * Children components
   */
  children: React.ReactNode;
}

/**
 * @author DigitalNews
 * @version 1.0.9
 * @description component AppForm
 */

const AppForm: React.SFC<AppFormProps> = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box mt={7} mb={12}>
          <MuiPaper className={classes.paper}>{children}</MuiPaper>
        </Box>
      </Container>
    </div>
  );
};

export default AppForm;
