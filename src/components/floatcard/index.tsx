import * as React from "react";
import "./_floatcard.style.scss";
import CardProduc from "./CardProduct";
import cls from "clsx";
// import { useSelector } from "../../zviewsnevado/Products/action";
import { formatPrice } from "../../utils/other";
import { IProduct } from "../card/shoping/product";
export interface FloatCardProps {
  productCart: IProduct[];
  removeProductCard: (uid: string) => void;
  renderChekout: (param: IChekeout) => void;
}

export interface IChekeout {
  product: IProduct[];
  subTotal: number;
}

const FloatCard: React.SFC<FloatCardProps> = (props) => {
  const { productCart, removeProductCard, renderChekout } = props;

  //[*] hooks status cardFloating
  const [isOpen, setOpen] = React.useState(false);

  //[*] get products Store
  // const { state, actions } = useSelector();

  const handleClose = () => {
    setOpen(false);
    document.getElementsByTagName("html")[0].style.overflow = "";
  };

  const handelOpen = () => {
    setOpen(true);
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  };

  return (
    <div className={cls("float-cart", !!isOpen && "float-cart--open")}>
      {isOpen && (
        <div onClick={() => handleClose()} className="float-cart__close-btn">
          X
        </div>
      )}

      {!isOpen && (
        <span
          onClick={() => handelOpen()}
          className="bag bag--float-cart-closed"
        >
          <span className="bag__quantity">{productCart.length}</span>
        </span>
      )}

      {/* comienza floatincar */}
      <div className="float-cart__content">
        {/* header */}
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{productCart.length}</span>
          </span>
          <span className="header-title">Cart</span>
        </div>
        {/* content */}
        <div className="float-cart__shelf-container">
          {productCart.length === 0 ? (
            <p className="shelf-empty">
              Añade algunos productos en el carrito. <br />
              <img
                style={{ color: "#fff" }}
                src="/static/img/buy.svg"
                width="100"
                alt="productos"
              ></img>
            </p>
          ) : (
            productCart.map((product, index) => (
              <CardProduc
                removeProduc={removeProductCard}
                key={product.sku + index.toString()}
                product={product}
              />
            ))
          )}
        </div>
        {/* footer */}
        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">
              PEN{" "}
              {productCart.length > 0 &&
                formatPrice(
                  productCart
                    .map((product) => product.price)
                    .reduce((previs, currne) => previs + currne),
                  "PEN"
                )}
            </p>
            {/* <small className="sub-price__installment"> */}
            {/* <span>{`OR UP TO 5 x $ 199.00`}</span> */}
            {/* </small> */}
          </div>
          <div
            onClick={() =>
              productCart.length > 0 &&
              renderChekout({
                product: productCart,
                subTotal: parseFloat(
                  formatPrice(
                    productCart
                      .map((product) => product.price)
                      .reduce((previs, currne) => previs + currne),
                    "PEN"
                  )
                ),
              })
            }
            className="buy-btn"
          >
            Checkout
          </div>
        </div>
      </div>
      {/* checkoud */}
    </div>
  );
};

export default FloatCard;
