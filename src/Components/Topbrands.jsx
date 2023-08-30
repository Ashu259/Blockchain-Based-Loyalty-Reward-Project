import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { topBrand } from "../Data/categoryData";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Topbrands = () => {
  return (
    <div className="brandtag">
      <h2>Top Brands</h2>
      <div className="allbrands">
        <Carousel
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          slidesToSlide={1}
          keyBoardControl={true}
          responsive={responsive}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* <div className="allbrands"> */}
          {topBrand.map((Data) => (
            // <div className="brandimg">
            <img id="brandlogo" className={Data.id} src={Data.url} alt="" />
            // </div>
          ))}
          {/* </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Topbrands;
