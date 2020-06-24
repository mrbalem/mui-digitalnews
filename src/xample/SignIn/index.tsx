import * as React from "react";
import AppFooter from "../../views/AppFooter";
import AppAppBar from "../../views/appappbar";

export interface SignInProps {}

const SignIn: React.SFC<SignInProps> = () => {
  return (
    <>
      <AppAppBar
        title="gridmall"
        position="fixed"
        rightItem={[
          { link: "/#", name: "iniciar" },
          { link: "/#", name: "regístrate" },
        ]}
      />
      <AppFooter />
    </>
  );
};

export default SignIn;
