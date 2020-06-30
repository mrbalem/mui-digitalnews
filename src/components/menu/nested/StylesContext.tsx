import * as React from "react";

const StylesContext = React.createContext({} as any);

export const useCtxStyles = () => React.useContext(StylesContext);

type PropsStyle = {
  useStyles: (props: any) => void;
  [key: string]: any;
};

export const StylesProvider = ({ useStyles, ...props }: PropsStyle) => {
  const styles = useStyles(props);
  return <StylesContext.Provider {...props} value={styles} />;
};
