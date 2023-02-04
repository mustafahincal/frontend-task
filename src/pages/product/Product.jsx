import axios from "axios";
import { useEffect } from "react";

import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { icons } from "../../assets";
import { useCartContext } from "../../contexts/CartContext";
import { useProductContext } from "../../contexts/ProductContext";
import { useLoadingContext } from "../../contexts/LoadingContext";
import Loading from "../../components/Loading";
import Cart from "../../components/Cart";
import SponsoredItems from "./SponsoredItems";

const Product = () => {
  const { selectedProduct, setSelectedProduct } = useProductContext();
  const { addToCart, productControl, removeFromCart, buyProducts } =
    useCartContext();
  const { isLoading, setIsLoading } = useLoadingContext();

  const { id } = useParams();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    axios.get(`https://dummyjson.com/products/${id}`).then((result) => {
      setSelectedProduct(result.data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="w-4/5 m-auto mt-10 pt-[100px]">
        <div className="flex gap-6 items-center">
          <Link to="/">
            <img src={icons.productPageLeftArrow} alt="" />
          </Link>
          <span className="font-medium text-[18px]">
            Back to previous page | Listed in category:
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
          <div className="w-[600px] h-[600px]  bg-product-image-bg rounded-3xl flex flex-shrink-0 justify-center items-center">
            <img
              src={selectedProduct.images[0]}
              className="w-3/4 object-cover object-center"
              alt=""
            />
          </div>

          <div className="mt-10 flex justify-between gap-5">
            <img src={icons.productPageLeftArrow} alt="" />
            {selectedProduct.images[1] ? (
              <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
                <img
                  src={selectedProduct.images[1]}
                  className="w-[120px] h-[120px] object-cover object-center"
                  alt=""
                />
              </div>
            ) : null}
            {selectedProduct.images[2] ? (
              <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
                <img
                  src={selectedProduct.images[2]}
                  className="w-[120px] h-[120px] object-cover object-center"
                  alt=""
                />
              </div>
            ) : null}
            {selectedProduct.images[3] ? (
              <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
                <img
                  src={selectedProduct.images[3]}
                  className="w-[120px] h-[120px] object-cover object-center"
                  alt=""
                />
              </div>
            ) : null}
            <img src={icons.productPageRightArrow} alt="" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-6 ">
            <span className="font-medium text-[32px]">
              {selectedProduct.title}
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
              <img src={icons.productStar} alt="" />
              <img src={icons.productStar} alt="" />
              <img src={icons.productStar} alt="" />
              <img src={icons.productStar} alt="" />
              <img src={icons.productStarEmpty} alt="" />
            </div>
            <span className="font-semibold text-[18px]">
              {selectedProduct.rating}
            </span>
            <span className="text-gray-400">from 392 Reviews</span>
          </div>
          <div className="mt-5 gap-1 flex">
            <img src={icons.dollar} className="relative -top-3" alt="" />
            <span className="font-medium text-[44px]">
              {selectedProduct.price}
            </span>
          </div>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-3">
              <img src={icons.productTick} alt="" />
              <span className="text-[18px]">Free Return</span>
            </li>
            <li className="flex gap-3">
              <img src={icons.productTick} alt="" />
              <span className="text-[18px]">Chat with us 24 hours</span>
            </li>
            <li className="flex gap-3">
              <img src={icons.productTick} alt="" />
              <span className="text-[18px]">Comes with a Package</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3 items-center">
            <img src={icons.productCustomer} alt="" />
            <span className="text-[18px] text-product-search-button">
              1,241 Sold in the last 24 hours
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <button
              onClick={buyProducts}
              className="text-white bg-product-search-button py-3 px-20 text-xl rounded-xl"
            >
              But it now
            </button>
            {!productControl(id) ? (
              <button
                onClick={() => addToCart(selectedProduct)}
                className="bg-product-image-bg text-product-search-button py-3 px-20 text-xl rounded-xl"
              >
                Add to cart
              </button>
            ) : (
              <button
                onClick={() => removeFromCart(selectedProduct.id)}
                className="bg-red-100 text-red-500 py-3 px-20 text-xl rounded-xl"
              >
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-product-image-bg h-[75px] flex items-center">
        <div className="w-4/5 m-auto">
          <ul className="flex gap-14 items-center">
            <li className="flex flex-col gap-3 relative text-[18px]">
              <span className="font-semibold">About</span>
              <img
                src={icons.productPageAbout}
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
          <img
            src={selectedProduct.images[0]}
            className="w-[230px] h-[230px] object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <ul>
            {selectedProduct.description?.split(",")?.map((desc, index) => (
              <li key={index} className="list-disc">
                {desc}
              </li>
            ))}
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

      <SponsoredItems />
      <Cart />
    </>
  );
};

export default Product;
