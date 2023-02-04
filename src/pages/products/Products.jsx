import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        let productPages = [];
        for (let i = 0; i < result.data.products.length; i += 8) {
          const page = result.data.products.slice(i, i + 8);
          productPages = [...productPages, page];
        }
        setProducts(productPages);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTogglePageNumber = (num) => {
    num = pageNumber + num;
    if (num < 0) {
      num = products.length - 1;
    }
    if (num >= 4) {
      console.log("heyy");
      num = 0;
    }
    setPageNumber(num);
  };

  return (
    <div className="pb-[130px]  bg-content-bg" id="products">
      <div className="w-3/4 m-auto">
        <div className="text-center">
          <div className="text-[64px] font-bold">Products</div>
          <div>
            <ul className="text-content-small-text text-[20px] flex gap-[40px] justify-center mt-[28px]">
              <li className="text-nav-button font-bold">All</li>
              <li className="cursor-pointer transition-all hover:text-nav-button">
                Chair
              </li>
              <li className="cursor-pointer transition-all hover:text-nav-button">
                Table
              </li>
              <li className="cursor-pointer transition-all hover:text-nav-button">
                Bed
              </li>
              <li className="cursor-pointer transition-all hover:text-nav-button">
                Closet
              </li>
              <li className="cursor-pointer transition-all hover:text-nav-button">
                Sofa
              </li>
              <li className="cursor-pointer transition-all hover:text-nav-button">
                Cabinet
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[70px] grid grid-cols-12 gap-x-10 gap-y-16">
          {products[pageNumber]?.map((product) => (
            <div key={product.id} className="product-item">
              <div className="h-1/4"></div>
              <div className="product-item-part">
                <div className="product-image">
                  <img
                    src={product.images[0]}
                    className="w-[150px] object-cover"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-[24px] font-bold mb-2">
                    {product.title}
                  </div>
                  <div className="flex justify-between ">
                    <span className="text-[18px]">${product.price}</span>
                    <Link to={`/product/${product.id}`}>
                      <img src={icons.arrowRight} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center px-52 mt-16">
          <div
            className="cursor-pointer"
            onClick={() => handleTogglePageNumber(-1)}
          >
            <img src={icons.leftArrow} alt="" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleTogglePageNumber(1)}
          >
            <img src={icons.rightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
