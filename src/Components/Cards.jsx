import React from "react";
import { cardData } from "../Data/categoryData";
import { cardData2 } from "../Data/categoryData";

const Cards = () => {
  return (
    <div className="allcards">
      <h2 id="offers">Top Offers</h2>
      <div className="lowercard">
        <div className="cards">
          {cardData.map((data) => (
            <div className={data.id}>
              <h2> {data.brand} </h2>
              <h1> {data.name} </h1>
              <button>Browse</button>
              <img src={data.url} alt="" />
            </div>
          ))}
        </div>
        <div className="cards">
          {cardData2.map((data) => (
            <div className={data.id}>
              <h2> {data.brand} </h2>
              <h1> {data.name} </h1>
              <button>Browse</button>
              <img src={data.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
