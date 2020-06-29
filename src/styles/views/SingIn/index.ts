import { makeStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/styles";

import SignInStyles, {
  SignInStyleProps,
  SignInStyleClassKey,
} from "./SingIn.style";

const useSignInStyles: (
  props: SignInStyleProps
) => ClassNameMap<SignInStyleClassKey> = makeStyles(SignInStyles, {
  name: "SignIn",
});

export { useSignInStyles };
export { default } from "./SingIn.style";
