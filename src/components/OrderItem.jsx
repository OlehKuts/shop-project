import { orderActions } from "../constants/constants";

export const OrderItem = ({
  order,
  remove,
  incrementAmount,
  decrementAmount,
  ...props
}) => {
  const { name, id, finalPrice, amount } = order;
  const removeOrder = () => {
    remove({ type: orderActions.REMOVE, payload: { orderId: id } });
  };
  const increment = () => {
    incrementAmount({
      type: orderActions.INCREMENT_AMOUNT,
      payload: { orderId: id },
    });
  };
  const decrement = () => {
    decrementAmount({
      type: orderActions.DECREMENT_AMOUNT,
      payload: { orderId: id },
    });
  };
  return (
    <li className="collection-item">
      <span className="orderSpan">
        {name} - {finalPrice}$ - x {amount}
      </span>
      <a
        className="btn-floating btn-small waves-effect waves-light blue"
        onClick={increment}
      >
        <i className="material-icons">add</i>
      </a>
      <a
        className="btn-floating btn-small waves-effect waves-light red"
        disabled={amount === 1}
        onClick={decrement}
      >
        <i className="material-icons right">remove</i>
      </a>
      <i className="material-icons right orderDelete" onClick={removeOrder}>
        close
      </i>
    </li>
  );
};
