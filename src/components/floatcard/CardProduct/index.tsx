import * as React from "react";
import Thumb from "../../thumb";
import { IProduct } from "../../card/shoping/product";
import { formatPrice } from "../../../utils/other";

export interface CardProducProps {
  product: IProduct;
  removeProduc: (uid: string) => void;
}

const CardProduc: React.SFC<CardProducProps> = (props) => {
  const { product, removeProduc } = props;

  const classes = ["shelf-item"];

  //[*] state is MouseOver
  const [isMouseOver, setMouseOver] = React.useState(false);

  if (!!isMouseOver) {
    classes.push("shelf-item--mouseover");
  }

  return (
    <div className={classes.join(" ")}>
      <div
        className="shelf-item__del"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        onClick={() => removeProduc(product.uid)} //removeProduct(product)}
      />

      <Thumb
        style={{ padding: "10px 0px" }}
        className="shelf-item__thumb"
        src={product.img[0]}
        alt={product.title}
      />

      <div className="shelf-item__details">
        <p className="title">{product.title}</p>
        <p className="desc">
          {`${product.availableSizes[0]} | ${product.style}`} <br />
          Cantidad: 1
        </p>
      </div>
      <div style={{ marginTop: 10 }} className="shelf-item__price">
        <p>{`${product.currencyFormat}  ${formatPrice(
          product.price,
          product.currencyId
        )}`}</p>
        <div>
          <button
            disabled={product.minQuantity === 1 ? true : false}
            className="change-product-button"
          >
            -
          </button>
          <button className="change-product-button">+</button>
        </div>
      </div>
    </div>
  );
};

export default CardProduc;
