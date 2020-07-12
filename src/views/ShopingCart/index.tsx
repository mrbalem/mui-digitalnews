import * as React from "react";
import ProductList from "../../components/card/shoping";
import FloatCard, { IChekeout } from "../../components/floatcard";
import { IProduct } from "../../components/card/shoping/product";

interface IShopingCartProps {
  products: IProduct[];
  loading?: boolean;
  productCart: IProduct[];
  renderViews?: (product: IProduct[]) => React.ReactChild;
  addProduct: (product: IProduct) => void;
  removeProductCart: (uid: string) => void;
  renderChekeout: (product: IChekeout) => void;
}

/**
 * @version 1.0.0
 * @author Rony cb
 * @description shoping cart component views
 * @param props
 */
const ShopingCart: React.FunctionComponent<IShopingCartProps> = (props) => {
  const {
    addProduct,
    productCart,
    products,
    removeProductCart,
    renderChekeout,
    loading,
  } = props;
  return (
    <>
      <ProductList
        products={products}
        loading={loading}
        addProduct={addProduct}
      />
      <FloatCard
        renderChekout={(product) => renderChekeout(product)}
        productCart={productCart}
        removeProductCard={removeProductCart}
      />
    </>
  );
};

export default ShopingCart;
