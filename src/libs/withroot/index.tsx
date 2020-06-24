import * as React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import themeDefalult from "../theme";
/**
 * WithRoot props
 */
export interface WithRootProps {
  /**
   * props for Component
   */
  [x: string]: any;
}

type Component = React.SFC<any>;

/**
 * @version 1.0.0
 * @author Rony cb
 * @param Theme Theme for component
 */

const withRoot = (theme?: any) => (Component: Component) => {
  const WithRoot: React.SFC<WithRootProps> = (props) => {
    //console.log("other props Component", props);
    const { ...other } = props;
    return (
      <ThemeProvider theme={theme || themeDefalult}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...other} />
      </ThemeProvider>
    );
  };
  return WithRoot;
};

export default withRoot;
