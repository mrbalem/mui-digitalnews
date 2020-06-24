import { makeStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/styles";

import AppAppBarStyles, {
  AppAppBarStyleProps,
  AppAppBarStyleClassKey,
} from "./AppAppBar.styles";

const useAppAppBarStyles: (
  props?: AppAppBarStyleProps
) => ClassNameMap<AppAppBarStyleClassKey> = makeStyles(AppAppBarStyles, {
  name: "AppAppBar",
});

export { useAppAppBarStyles };
export { default } from "./AppAppBar.styles";
