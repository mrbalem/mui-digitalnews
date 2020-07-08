import * as React from "react";
import Product, { IProduct } from "./product";
import "./_shoping.style.scss";
import { makeStyles, Theme } from "@material-ui/core";

export interface ProductListProps {
  products: IProduct[];
  loading?: boolean;
}

//[*] style material ui
const useStales = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    backgroundImage: "url('/static/img/productCurvyLines.png')",
    overflow: "hidden",
  },
}));

const ProductList: React.SFC<ProductListProps> = (props) => {
  const { products, loading } = props;
  const classes = useStales();
  return (
    <section className={classes.root}>
      <div className="shelf-container">
        {products.map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
