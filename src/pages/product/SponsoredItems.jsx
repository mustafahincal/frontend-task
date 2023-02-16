import React from "react";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";

import { icons } from "../../assets";
import { useProductContext } from "../../contexts/ProductContext";

const SponsoredItems = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const { products } = useProductContext();

  const navigate = useNavigate();
  const handleSponsoredProductClick = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-4/5 m-auto py-16 ">
      <div className="text-gray-500 font-semibold text-[25px]">
        Smiliar sponsored items
      </div>
      <div className="mt-10">
        <Carousel
          swipeable={true}
          draggable={true}
          infinite={true}
          autoPlay={true}
          responsive={responsive}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="z-10"
        >
          {products[0]?.map((product) => (
            <div
              key={product.id}
              onClick={() => handleSponsoredProductClick(product.id)}
              className="w-[250px] h-[340px] flex flex-col rounded-3xl p-5 bg-white shadow-sponsored-item gap-0.5 cursor-pointer"
            >
              <div className="w[200px] h-[200px] flex justify-center items-center rounded-3xl bg-product-image-bg">
                <img
                  src={product.images[0]}
                  className="w-[160px] h-[160px] object-cover object-center"
                  alt=""
                />
              </div>
              <span className="text-gray-600 mt-3"> {product.title} </span>
              <span className="text-gray-500"> {product.brand} </span>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[24px] ">
                  {product.price}$
                </span>
                <div className="flex gap-2 items-center">
                  <img src={icons.productStar} alt="" />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SponsoredItems;
