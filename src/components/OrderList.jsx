import React, { useMemo } from "react";
import { OrderItem } from "./OrderItem";
import { totalPriceCounter } from "../utils/totalPriceCounter";
import { orderActions } from "../constants/constants";

export const OrderList = ({
  orderList = [],
  toggleBasketVisibility,
  remove,
  incrementAmount,
  decrementAmount,
  clear,
  ...props
}) => {
  const clearBasket = () => {
    if (orderList.length) {
      alert(
        `Your order has been received! ${totalPrice} to pay! Wait for our call!`
      );
      clear({ type: orderActions.CLEAR });
    } else {
      alert("You didn't choose any product!");
    }
  };
  const totalPrice = useMemo(() => {
    return totalPriceCounter(orderList);
  }, [orderList]);
  return (
    <>
      <ul className="collection orderList">
        <li
          href="#!"
          className="collection-item active hideBasket"
          onClick={toggleBasketVisibility}
        >
          Your current order
          <i className="material-icons right">arrow_forward</i>
        </li>
        {orderList.map((item) => (
          <OrderItem
            order={item}
            key={item.id}
            remove={remove}
            incrementAmount={incrementAmount}
            decrementAmount={decrementAmount}
          />
        ))}
        {!orderList.length ? (
          <li className="collection-item">Your basket is empty!</li>
        ) : null}
        <li href="#!" className="collection-item active">
          Total price is {totalPrice}$
        </li>
        <li href="#!" className="collection-item active">
          <button
            className=" btn-small #3949ab indigo darken-1"
            onClick={clearBasket}
          >
            Confirm
          </button>
        </li>
      </ul>
    </>
  );
};
