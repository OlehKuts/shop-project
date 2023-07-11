import React from "react";
import { GoodItem } from "./GoodItem";

export const GoodsList = ({ goods = [], add, ...props }) => {
  return (
    <>
      {!goods.length ? (
        <h3>There are no goods available</h3>
      ) : (
        <div className="goods">
          {goods.map((item) => (
            <GoodItem good={item} key={item.mainId} add={add} />
          ))}
        </div>
      )}
    </>
  );
};
