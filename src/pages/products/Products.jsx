import React from "react";

const Products = () => {
  return (
    <div className="py-[130px] px-[150px] bg-content-bg">
      <div className="text-center">
        <div className="text-[64px] font-bold">Products</div>
        <div>
          <ul className="text-content-small-text text-[20px] flex gap-[40px] justify-center mt-[40px]">
            <li className="text-nav-button font-bold">All</li>
            <li>Chair</li>
            <li>Table</li>
            <li>Bed</li>
            <li>Closet</li>
            <li>Sofa</li>
            <li>Cabinet</li>
          </ul>
        </div>
      </div>
      <div className="mt-[100px] grid grid-cols-12 gap-x-10 gap-y-20">
        <div className="h-[350px] col-span-3">
          <div className="h-1/4"></div>
          <div className="h-3/4 bg-product-bg p-8 flex items-end relative">
            <div className="absolute -top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2">
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
        <div className="h-[350px] col-span-3">
          <div className="h-1/4"></div>
          <div className="h-3/4 bg-product-bg p-8 flex items-end relative">
            <div className="absolute -top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2 ">
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
        <div className="h-[350px] col-span-3">
          <div className="h-1/4"></div>
          <div className="h-3/4 bg-product-bg p-8 flex items-end relative">
            <div className="absolute -top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2">
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
        <div className="h-[350px] col-span-3">
          <div className="h-1/4"></div>
          <div className="h-3/4 bg-product-bg p-8 flex items-end relative">
            <div className="absolute -top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2">
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
        <div className="h-[350px] col-span-3">
          <div className="h-1/4"></div>
          <div className="h-3/4 bg-product-bg p-8 flex items-end relative">
            <div className="absolute -top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2">
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
        <div className="h-[350px] col-span-3">
          <div className="h-1/4"></div>
          <div className="h-3/4 bg-product-bg p-8 flex items-end relative">
            <div className="absolute -top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2">
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
        <div className="h-[350px] col-span-3">
          <div className="h-1/4"></div>
          <div className="h-3/4 bg-product-bg p-8 flex items-end relative">
            <div className="absolute -top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2">
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
        <div className="h-[350px] col-span-3">
          <div className="h-1/4"></div>
          <div className="h-3/4 bg-product-bg p-8 flex items-end relative">
            <div className="absolute -top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2">
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
      </div>
    </div>
  );
};

export default Products;