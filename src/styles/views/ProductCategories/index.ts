import { makeStyles } from "@material-ui/core/styles";

import ProductCategories from "./ProductCategories.style";

const useProductCategories = makeStyles(ProductCategories, {
  name: "ProductCategory",
});

export { useProductCategories };
export { default } from "./ProductCategories.style";
