import React from "react";
import { orderActions } from "../constants/constants";

export const GoodItem = ({ good, add, ...props }) => {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: { regularPrice, finalPrice },
    displayAssets: [{ full_background }],
  } = good;
  const addGood = () => {
    const newGood = {
      id,
      name,
      finalPrice,
      amount: 1,
    };
    add({ type: orderActions.ADD, payload: { newGood: newGood } });
  };
  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
              <span className="card-title">{name}</span>
              <p>{description}</p>
            </div>
            <div className="card-action">
              <button className="buyBtn" onClick={addGood}>
                Buy
              </button>
              {regularPrice === finalPrice ? null : (
                <span className="regularPrice">{regularPrice}$</span>
              )}
              <span className="right finalPrice">{finalPrice}$</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
