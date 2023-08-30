import React from "react";
import Category from "../Components/Category";
import Banners from "../Components/Banners";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import { useEffect } from "react";
import { getProducts } from "../redux/action/productActions";
import { useDispatch, useSelector } from "react-redux";
import Items from "../Components/Items";
import Footer1 from "../Components/Footer1";
import Topbrands from "../Components/Topbrands";

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Category />
      <Banners />
      <Items products={products} />
      <Cards />
      <Topbrands />
      <Footer1 />
    </>
  );
};

export default Home;
