import * as React from "react";
import { IProduct } from "./components/models";
import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import Filter, { FilterProps } from "./components/filter";
import FloatCard, { IFloatCardProps } from "./components/cart";
import "./_style.shopingCart.scss";

interface IShoPingCartProps extends FilterProps {
  /**
   * productos a mostrar
   */
  products: Array<IProduct>;
  /**
   * esta funcion nos permite agregar un nuevo
   * producto al context storage
   */
  addProduct: (product: IProduct) => void;

  /**
   * esta funcion nos permite renderizar los productos en
   * una UI especifica
   */
  renderPorductUI: (
    product: IProduct,
    addProduct: (product: IProduct) => void,
    index: number
  ) => React.ReactChild;

  /**
   * UI para mostrar cuando el producto no tiene
   * ningun elemento
   */
  NotFountUI: React.ReactChild;
  /**
   * UI para mostrar cuando el producto esta
   * consultando los datos del servidor
   */
  LoadingUI: React.ReactChild;

  /**
   * identifica el estado de carga de los productos
   */
  loading: boolean;
}

const ShoPingCart: React.FC<IShoPingCartProps & IFloatCardProps> = (props) => {
  //[*] recuperamos los props
  const {
    products,
    loading,
    updateFilters,
    addProduct,
    renderPorductUI,
    productCart,
    initialCategory,
    removeProductCard,
    categories,
    getCategory,
    LoadingUI,
    NotFountUI,
    renderFloatProductUI,
    renderChekout,
  } = props;

  //[*] hooks classes
  const classes = useStyle();
  return (
    <>
      <main>
        <Filter
          initialCategory={initialCategory}
          categories={categories}
          getCategory={(category) => getCategory(category)}
          updateFilters={(filter) => updateFilters(filter)}
        />
        <section
          className={clsx(
            !products || loading ? classes.loading : classes.root
          )}
        >
          <div className="shelf-container">
            {(!products || loading) && LoadingUI}
            {products.length === 0
              ? NotFountUI
              : products.map((product, index) =>
                  renderPorductUI(product, addProduct, index)
                )}
          </div>
        </section>
      </main>
      <FloatCard
        productCart={productCart}
        removeProductCard={removeProductCard}
        renderFloatProductUI={renderFloatProductUI}
        renderChekout={renderChekout}
      />
    </>
  );
};

//[*] style material ui
const useStyle = makeStyles((theme: Theme) => ({
  root: {
    width: "95%",
    backgroundColor: theme.palette.secondary.light,
    backgroundImage: "url('/static/img/productCurvyLines.png')",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  loading: {
    width: "95%",
  },
  notgound: {
    width: "95%",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "cente",
  },
}));

export default ShoPingCart;
