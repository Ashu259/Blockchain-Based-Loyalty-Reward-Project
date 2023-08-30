import React, { useState } from "react";
import "./Createpro.css";
import { createProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

const productInitialValues = {
  image: "",
  title: {
    shortTitle: "",
    longTitle: "",
  },
  price: "",
  quantity: "",
  desc: "",
  category: "",
};

const Createproduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(productInitialValues);

  const changeHandler = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    if (name.includes(".")) {
      // If the field name contains a dot (.), it means it's a nested field
      const [outerKey, innerKey] = name.split(".");
      setProductData((productData) => ({
        ...productData,
        [outerKey]: {
          ...productData[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      setProductData((productData) => ({
        ...productData,
        [name]: value,
      }));
    }
    console.log(productData);
  };

  const createP = async () => {
    let response = await createProduct(productData);
    console.log(response);
    // if (!response) return;
    // setAccount(signUp.username);
    navigate("/");
  };

  return (
    <div class="center">
      <div class="pform">
        <h2>create product</h2>
        {/* <form method="post" action="/create">   */}
        <input
          onChange={(e) => changeHandler(e)}
          id="pname"
          type="text"
          placeholder="Product Name"
          name="title.shortTitle"
        />
        <input
          onChange={(e) => changeHandler(e)}
          id="pname"
          type="text"
          placeholder="Product Name"
          name="title.longTitle"
        />
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          placeholder="Product image Url"
          name="image"
        />
        <input
          onChange={(e) => changeHandler(e)}
          id="price"
          type="number"
          placeholder="Price"
          name="price"
        />
        <input
          onChange={(e) => changeHandler(e)}
          type="number"
          placeholder="quantity"
          name="quantity"
        />
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          placeholder="category"
          name="category"
        />
        <textarea
          onChange={(e) => changeHandler(e)}
          placeholder="Product Description "
          name="desc"
          id="desc"
          cols="49"
          rows="10"
        ></textarea>
        <input
          onClick={() => createP()}
          id="submit"
          type="submit"
          value="Submit"
        />
        {/* </form> */}
      </div>
    </div>
  );
};

export default Createproduct;
