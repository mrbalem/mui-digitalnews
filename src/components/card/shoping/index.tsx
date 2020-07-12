import * as React from "react";
import Product, { IProduct } from "./product";
import "./_shoping.style.scss";
import { makeStyles, Theme } from "@material-ui/core";
import Esqueleton from "../../squeleton";
// import { useSelector } from "../../../zviewsnevado/Products/action";

export interface ProductListProps {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  loading?: boolean;
}

//[*] style material ui
const useStales = makeStyles((theme: Theme) => ({
  root: {
    width: "95%",
    backgroundColor: theme.palette.secondary.light,
    backgroundImage: "url('/static/img/productCurvyLines.png')",
    overflow: "hidden",
  },
  loading: {
    width: "95%",
  },
}));

const ProductList: React.FC<ProductListProps> = (props) => {
  const { products, loading, addProduct } = props;
  const classes = useStales();
  // const { actions } = useSelector();
  if (loading) {
    return (
      <section className={classes.loading}>
        <Esqueleton type="shoping" />
      </section>
    );
  }

  return (
    <section className={classes.root}>
      <div className="shelf-container">
        {products.map((p) => (
          <Product addProduct={addProduct} product={p} key={p.sku} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
