import React, { useState, useEffect, useReducer, useMemo } from "react";
import { API_KEY, API_URL } from "../constants/constants";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { orderReducer } from "./OrderReducer";
import { OrderList } from "./OrderList";
import { Alert } from "./Alert";

export const Shop = () => {
  const [order, dispatch] = useReducer(orderReducer, []);
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBasket, setShowBasket] = useState(false);
  const [alertName, setAlertName] = useState("");
  const closeAlert = () => {
    setAlertName("");
  };
  function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    }).then((response) =>
      response.json().then((data) => {
        setGoods(data.shop);
        setLoading(false);
      })
    );
  }
  const toggleBasketVisibility = () => {
    setShowBasket(!showBasket);
  };
  useEffect(() => {
    getGoods();
  }, []);
  const totalItems = useMemo(() => {
    return [...order].reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
  }, [order]);
  useEffect(() => {
    if (order.length) setAlertName(order[order.length - 1].name);
  }, [totalItems]);

  return (
    <>
      <>
        <main className="container content">
          {alertName ? (
            <Alert name={alertName} closeAlert={closeAlert} />
          ) : null}
          {showBasket ? (
            <OrderList
              orderList={order}
              toggleBasketVisibility={toggleBasketVisibility}
              remove={dispatch}
              incrementAmount={dispatch}
              decrementAmount={dispatch}
              clear={dispatch}
            />
          ) : null}
          <Cart
            quantity={order.length}
            toggleBasketVisibility={toggleBasketVisibility}
          />
          {loading ? <Preloader /> : <GoodsList goods={goods} add={dispatch} />}
        </main>
      </>
    </>
  );
};
