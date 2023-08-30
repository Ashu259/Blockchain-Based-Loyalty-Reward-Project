import React from "react";
import { Link } from "react-router-dom";
const Items = ({ products }) => {
  return (
    <div className="productSection">
      <h2 id="tagline">Top Products</h2>
      <div className="allProducts">
        {products.map((product) => (
          <Link
            to={`product/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="product">
              <div className="topimg">
                <img src={product.image} alt="" />
              </div>
              <div className="btmtext">
                <div className="nametext">
                  <div className="titles">
                    <h4> {product.category} </h4>
                    <h2> {product.title.shortTitle} </h2>
                  </div>
                  <button id="nametextbutton" >
                    <i class="ri-add-fill"></i>
                  </button>
                </div>
                <div className="pricetext">
                  <h2> {product.price} </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Items;
