import * as React from "react";
import "./_shoping.style.scss";
import Thumb from "../../../thumb";
import { formatPrice } from "../../../../utils/other";
import { Paper } from "@material-ui/core";

export interface IProduct {
  uid: string;
  sku: string;
  title: string;
  category: string;
  img: string[];
  quantity: number;
  description: string;
  price: number;
  currencyId: string;
  currencyFormat: string;
  availableSizes: Array<string>;
  availableColor: Array<string>;
  isOffertShipping?: boolean;
  priceMayor?: number;
  minQuantity?: number;
  style?: string;
}

export interface ShopingProps {
  product: IProduct;
  addProduct?: (product: any) => void;
}

const Shoping: React.SFC<ShopingProps> = (props) => {
  const { product, addProduct } = props;

  // console.log("desde shiping", actions);

  let formattedPrice = formatPrice(product.price, product.currencyId);
  let productInstallment;

  if (!!product.isOffertShipping) {
    // const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>o {product.minQuantity || product.isOffertShipping} x </span>
        <b>
          {product.currencyFormat}
          {formatPrice(product.priceMayor || product.price, product.currencyId)}
        </b>
      </div>
    );
  }

  return (
    <div className="shelf-item" data-sku={product.sku}>
      {product.isOffertShipping && <div className="shelf-stopper">Oferta</div>}
      <Paper className="paper-root" elevation={3}>
        <Thumb
          className="shelf-item__thumb"
          src={product.img[0]}
          alt={product.title}
          title={product.title}
        />

        <p className="shelf-item__title">{product.title}</p>
        <div className="shelf-item__price">
          <div className="val">
            {/* <span>{product.minQuantity || 1} x </span> */}
            <small>{product.currencyFormat}</small>
            <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
            <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
          </div>
          {productInstallment}
        </div>
      </Paper>
      <div
        onClick={() => addProduct && addProduct(product)}
        className="shelf-item__buy-btn"
      >
        Añadir al carrito
      </div>
    </div>
  );
};

export default Shoping;
