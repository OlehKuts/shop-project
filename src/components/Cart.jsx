export const Cart = ({ quantity, toggleBasketVisibility, ...props }) => {
  return (
    <div
      className="cart purple darken-3 white-text"
      onClick={toggleBasketVisibility}
    >
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cartQuantity">{quantity}</span> : null}
    </div>
  );
};
