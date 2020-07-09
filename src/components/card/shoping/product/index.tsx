import * as React from "react";

import Thumb from "../../../thumb";
import { formatPrice } from "../../../../utils/other";
import { Paper } from "@material-ui/core";

export interface IProduct {
  id: number;
  sku: number | string;
  title: string;
  description: string;
  img: string;
  minQuantity: number;
  priceMayor: number;
  availableSizes: Array<string>;
  style: string;
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isFreeShipping: boolean;
}

export interface ShopingProps {
  product: IProduct;
  addProduct?: (product: any) => void;
}

const Shoping: React.SFC<ShopingProps> = (props) => {
  const { product, addProduct } = props;

  let formattedPrice = formatPrice(product.price, product.currencyId);
  let productInstallment;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>o {product.minQuantity || product.installments} x </span>
        <b>
          {product.currencyFormat}
          {formatPrice(product.priceMayor || product.price, product.currencyId)}
        </b>
      </div>
    );
  }

  return (
    <div
      className="shelf-item"
      // onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <Paper className="paper-root" elevation={3}>
        <Thumb
          className="shelf-item__thumb"
          src={product.img}
          alt={product.title}
          title={product.title}
        />

        <p className="shelf-item__title">{product.title}</p>
        <div className="shelf-item__price">
          <div className="val">
            <small>{product.currencyFormat}</small>
            <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
            <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
          </div>
          {productInstallment}
        </div>
      </Paper>
      <div
        onClick={() => alert(JSON.stringify(product))}
        className="shelf-item__buy-btn"
      >
        Añadir al carrito
      </div>
    </div>
  );
};

export default Shoping;
