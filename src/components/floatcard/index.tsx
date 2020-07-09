import * as React from "react";
import "./_floatcard.style.scss";
import CardProduc from "./CardProduct";

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
          {/* <p className="shelf-empty">
            Añade algunos productos en el carrito. <br />
            <img
              style={{ color: "#fff" }}
              src="/static/img/buy.svg"
              width="100"
              alt="productos"
            ></img>
          </p> */}
          {[1, 2, 3, 4, 4, 3].map((e) => (
            <CardProduc
              key={e}
              product={{
                id: 12,
                sku: 12064273040195392,
                title: "NA-3144M1",
                description: "4 MSL",
                availableSizes: ["S", "XS"],
                style: "Black with custom print",
                price: 159,
                installments: 20,
                minQuantity: 20,
                priceMayor: 150,
                img:
                  "https://www.newathletic.com.pe/products/sm/1566504068.jpg",
                currencyId: "PEN",
                currencyFormat: "S/.",
                isFreeShipping: false,
              }}
            />
          ))}
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
