import * as React from "react";
import "./_floatcard.style.scss";
import cls from "clsx";
// import { useSelector } from "../../zviewsnevado/Products/action";
import { formatPrice } from "../../../../utils/other";
import { IProduct } from "../models";
export interface IFloatCardProps {
  /**
   * Contiene los productos selecionas por
   * el usuario
   */
  productCart: IProduct[];
  /**
   * esta funcion nos permite remover el producto
   * de contect storage
   */
  removeProductCard: (uid: string) => void;
  /**
   * retorna los elementos que son elegidos
   * para realizar otro tipo de verificacion
   */
  renderChekout: (param: IChekeout) => void;

  /**
   * renderiza la ui de los productos a mostrar
   * en FLoatCart
   */
  renderFloatProductUI: (
    product: IProduct,
    removeProduc: (uid: string) => void,
    index?: number
  ) => React.ReactChild;
}

export interface IChekeout {
  product: IProduct[];
  cantidad: number;
  subTotal: number;
}

/**
 * @autor Rony
 * @version 1.0.0
 * @param props
 */
const FloatCard: React.SFC<IFloatCardProps> = (props) => {
  const {
    productCart,
    removeProductCard,
    renderChekout,
    renderFloatProductUI,
  } = props;

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
            productCart.map((product, index) =>
              renderFloatProductUI(product, removeProductCard, index)
            )
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
                cantidad: productCart.length,
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
