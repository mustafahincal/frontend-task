import React from "react";

const Products = () => {
  return (
    <div className="pb-[130px]  bg-content-bg" id="products">
      <div className="w-3/4 m-auto">
        <div className="text-center">
          <div className="text-[64px] font-bold">Products</div>
          <div>
            <ul className="text-content-small-text text-[20px] flex gap-[40px] justify-center mt-[40px]">
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
        <div className="mt-[100px] grid grid-cols-12 gap-x-10 gap-y-20">
          <div className="product-item">
            <div className="h-1/4"></div>
            <div className="product-item-part">
              <div className="product-image">
                <img src="./assets/products-item1.svg" alt="" />
              </div>
              <div className="w-full">
                <div className="text-[24px] font-bold mb-2">Stool</div>
                <div className="flex justify-between ">
                  <span>$200</span>
                  <img src="./assets/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="h-1/4"></div>
            <div className="product-item-part">
              <div className="product-image">
                <img src="./assets/products-item2.svg" alt="" />
              </div>
              <div className="w-full">
                <div className="text-[24px] font-bold mb-2">Stool</div>
                <div className="flex justify-between ">
                  <span>$200</span>
                  <img src="./assets/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="h-1/4"></div>
            <div className="product-item-part ">
              <div className="product-image">
                <img src="./assets/products-item-3.svg" alt="" />
              </div>
              <div className="w-full">
                <div className="text-[24px] font-bold mb-2">Stool</div>
                <div className="flex justify-between ">
                  <span>$200</span>
                  <img src="./assets/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="h-1/4"></div>
            <div className="product-item-part ">
              <div className="product-image">
                <img src="./assets/products-item4.svg" alt="" />
              </div>
              <div className="w-full">
                <div className="text-[24px] font-bold mb-2">Stool</div>
                <div className="flex justify-between ">
                  <span>$200</span>
                  <img src="./assets/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="h-1/4"></div>
            <div className="product-item-part ">
              <div className="product-image">
                <img src="./assets/products-item5.svg" alt="" />
              </div>
              <div className="w-full">
                <div className="text-[24px] font-bold mb-2">Stool</div>
                <div className="flex justify-between ">
                  <span>$200</span>
                  <img src="./assets/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="h-1/4"></div>
            <div className="product-item-part ">
              <div className="product-image">
                <img src="./assets/products-item6.svg" alt="" />
              </div>
              <div className="w-full">
                <div className="text-[24px] font-bold mb-2">Stool</div>
                <div className="flex justify-between ">
                  <span>$200</span>
                  <img src="./assets/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="h-1/4"></div>
            <div className="product-item-part ">
              <div className="product-image">
                <img src="./assets/products-item7.svg" alt="" />
              </div>
              <div className="w-full">
                <div className="text-[24px] font-bold mb-2">Stool</div>
                <div className="flex justify-between ">
                  <span>$200</span>
                  <img src="./assets/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="h-1/4"></div>
            <div className="product-item-part ">
              <div className="product-image">
                <img src="./assets/products-item8.svg" alt="" />
              </div>
              <div className="w-full">
                <div className="text-[24px] font-bold mb-2">Stool</div>
                <div className="flex justify-between ">
                  <span>$200</span>
                  <img src="./assets/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
