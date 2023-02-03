import React from "react";

const Product = () => {
  return (
    <>
      <div className="w-4/5 m-auto mt-10">
        <div className="flex gap-6 items-center">
          <img src="./assets/product-page-left-arrow.svg" alt="" />
          <span className="font-medium text-[18px]">
            Back to previous page | Listed in category:{" "}
            <span className="text-product-search-button underline ml-1 mr-5">
              Cell Phones & Accessories
            </span>
            <span className="text-product-search-button underline">
              Cell Phones & Smartphones
            </span>
          </span>
        </div>
      </div>

      <hr className="mt-5" />

      <div className="w-4/5 m-auto py-20 flex justify-between gap-14">
        <div className="w-1/2 flex flex-col items-center">
          <div className="w-full bg-product-image-bg rounded-3xl flex justify-center items-center">
            <img src="./assets/product-image-1.svg" alt="" />
          </div>
          <div className="mt-10 flex justify-between gap-5">
            <img src="./assets/product-page-left-arrow.svg" alt="" />
            <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
              <img src="./assets/product-image-2.svg" alt="" />
            </div>
            <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
              {" "}
              <img src="./assets/product-image-3.svg" alt="" />
            </div>
            <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
              <img src="./assets/product-image-4.svg" alt="" />
            </div>
            <img src="./assets/product-page-right-arrow.svg" alt="" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-6 ">
            <span className="font-medium text-[32px]">
              Apple iPhone 13 (128GB)
            </span>
            <span className="bg-product-image-bg text-product-search-button py-2 px-10 font-medium text-[21px] rounded-xl">
              Starlight
            </span>
          </div>
          <span className="text-gray-400">
            Free 2 Days Shipping | 1 Year Warranty
          </span>
          <div className="mt-5 flex gap-4 items-center">
            <div className="flex gap-1.5">
              <img src="./assets/product-star.svg" alt="" />
              <img src="./assets/product-star.svg" alt="" />
              <img src="./assets/product-star.svg" alt="" />
              <img src="./assets/product-star.svg" alt="" />
              <img src="./assets/product-star-empty.svg" alt="" />
            </div>
            <span className="font-semibold text-[18px]">4.6</span>
            <span className="text-gray-400">from 392 Reviews</span>
          </div>
          <div className="mt-5 gap-1 flex">
            <img src="./assets/dollar.svg" className="relative -top-3" alt="" />
            <span className="font-medium text-[44px]">580</span>
          </div>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-3">
              <img src="./assets/product-tick.svg" alt="" />
              <span className="text-[18px]">Free Return</span>
            </li>
            <li className="flex gap-3">
              <img src="./assets/product-tick.svg" alt="" />
              <span className="text-[18px]">Chat with us 24 hours</span>
            </li>
            <li className="flex gap-3">
              <img src="./assets/product-tick.svg" alt="" />
              <span className="text-[18px]">Comes with a Package</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3 items-center">
            <img src="./assets/product-customer.svg" alt="" />
            <span className="text-[18px] text-product-search-button">
              1,241 Sold in the last 24 hours
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <button className="text-white bg-product-search-button py-3 px-20 text-xl rounded-xl">
              But it now
            </button>
            <button className="bg-product-image-bg text-product-search-button py-3 px-20 text-xl rounded-xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-product-image-bg h-[75px] flex items-center">
        <div className="w-4/5 m-auto">
          <ul className="flex gap-14 items-center">
            <li className="flex flex-col gap-3 relative text-[18px]">
              <span className="font-semibold">About</span>
              <img
                src="./assets/product-page-about.svg"
                className="absolute top-7 left-3"
                alt=""
              />
            </li>
            <li className="text-[18px] text-gray-500">Shipping</li>
            <li className="text-[18px] text-gray-500">Reviews</li>
            <li className="text-[18px] text-gray-500">Returns</li>
          </ul>
        </div>
      </div>

      <div className="w-4/5 m-auto pt-16 py-9   flex gap-20 items-center">
        <div className="bg-product-image-bg w-[300px] h-[300px] flex justify-center items-center rounded-3xl">
          <img src="./assets/product-page-about-image.svg" alt="" />
        </div>
        <div>
          <ul>
            <li className="list-disc">
              15 cm (6.1-inch) Super Retina XDR display
            </li>
            <li className="list-disc">
              Cinematic mode adds shallow depth of field and shifts focus
              automatically in your videos
            </li>
            <li className="list-disc">
              Advanced dual-camera system with 12MP Wide and Ultra Wide cameras;
              Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR
              recording
            </li>
            <li className="list-disc">
              12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
              recording
            </li>
            <li className="list-disc">
              A15 Bionic chip for lightning-fast performance
            </li>
            <li className="list-disc">Up to 19 hours of video playback</li>
            <li className="list-disc">Durable design with Ceramic Shield</li>
            <li className="list-disc">
              Industry-leading IP68 water resistance
            </li>
            <li className="list-disc">
              iOS 15 packs new features to do more with iPhone than ever before
            </li>
            <li className="list-disc">
              Supports MagSafe accessories for easy attachment and faster
              wireless charging
            </li>
          </ul>
        </div>
      </div>

      <div className="w-4/5 m-auto py-16 ">
        <div className="text-product-page-sponsored font-semibold text-[30px]">
          Smiliar sponsored items
        </div>
        <div className="mt-10">
          <div className="w-[300px] h-[370px] flex flex-col rounded-3xl p-7 bg-white shadow-sponsored-item">
            <div className="w[250px] h-[220px] flex justify-center items-center rounded-3xl bg-product-image-bg">
              <img src="./assets/sponsored-item1.svg" alt="" />
            </div>
            <span>iPhone 12 Charger...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
