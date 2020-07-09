import * as React from "react";
import Thumb from "../../thumb";
import { IProduct } from "../../card/shoping/product";

export interface CardProducProps {
  product: IProduct;
}

const CardProduc: React.SFC<CardProducProps> = (props) => {
  const { product } = props;

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
        onClick={() => alert("removiendo")} //removeProduct(product)}
      />

      <Thumb
        style={{ padding: "10px 0px" }}
        className="shelf-item__thumb"
        src={product.img}
        alt={product.title}
      />

      <div className="shelf-item__details">
        <p className="title">{product.title}</p>
        <p className="desc">
          {`${product.availableSizes[0]} | ${product.style}`} <br />
          Quantity: {product.minQuantity}
        </p>
      </div>
      <div style={{ marginTop: 10 }} className="shelf-item__price">
        <p>{`${product.currencyFormat}  ${product.price}`}</p>
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
