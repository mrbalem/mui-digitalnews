import { makeStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/styles";

import ProductHeroStyle, {
  ProductHeroStyleClassKey,
  ProductHeroStyleProps,
} from "./ProductHero.styles";

const useProductHeroStyle: (
  props: ProductHeroStyleProps
) => ClassNameMap<ProductHeroStyleClassKey> = makeStyles(ProductHeroStyle, {
  name: "ProductHero",
});

export { useProductHeroStyle };
export { default } from "./ProductHero.styles";
