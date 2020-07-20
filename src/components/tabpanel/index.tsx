import * as React from "react";

export interface TabPanelProps {
  index: any;
  value: any;
  [key: string]: any;
}

/**
 * @version 1.0.0
 * @author Rony CB
 */
const TabPanel: React.SFC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children} </div>}
    </div>
  );
};

export default TabPanel;
