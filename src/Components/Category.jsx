import React from "react";
import { categoryData } from "../Data/categoryData";
const Category = () => {
  return (
    <div className="allCategories">
      <div className="categories">
        {categoryData.map((data) => (
          <div className="category">
            <img src={data.url} alt="" />
            <p> {data.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
