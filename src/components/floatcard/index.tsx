import * as React from "react";
import "./_floatcard.style.scss";

export interface FloatCardProps {}

const FloatCard: React.SFC<FloatCardProps> = () => {
  //[*] hooks status cardFloating
  const [isOpen, setOpen] = React.useState(false);

  let classes = ["float-cart"];

  const handleClose = () => {
    setOpen(false);
    document.getElementsByTagName("html")[0].style.overflow = "";
  };

  const handelOpen = () => {
    setOpen(true);
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  };

  if (!!isOpen) {
    classes.push("float-cart--open");

    // document.getElementsByTagName("html")[0].style.overflow = "auto";
  }

  return (
    <div className={classes.join(" ")}>
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
          <span className="bag__quantity">{19}</span>
        </span>
      )}

      {/* comienza floatincar */}
      <div className="float-cart__content">
        {/* header */}
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{13}</span>
          </span>
          <span className="header-title">Cart</span>
        </div>
        {/* content */}
        <div className="float-cart__shelf-container">
          <p className="shelf-empty">
            Add some products in the cart <br />
            :)
          </p>
        </div>
        {/* footer */}
        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">$ 199.00</p>
            <small className="sub-price__installment">
              <span>{`OR UP TO 5 x $ 199.00`}</span>
            </small>
          </div>
          <div onClick={() => alert("hola")} className="buy-btn">
            Checkout
          </div>
        </div>
      </div>
      {/* checkoud */}
    </div>
  );
};

export default FloatCard;
