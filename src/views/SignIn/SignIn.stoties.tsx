import React, { FC } from "react";
import SignIn from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../libs/theme";
// eslint-disable-next-line import/no-default-export
export default { title: "SignIn", component: SignIn };

export const Theme: FC = () => (
  <MuiThemeProvider theme={theme}>
    <SignIn
      title="We provide the best tool"
      portada={{
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        title: "Brand",
        subtitle: "Feel the power inside you.",
      }}
    />
  </MuiThemeProvider>
);
