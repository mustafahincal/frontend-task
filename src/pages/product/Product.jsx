import axios from "axios";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { icons } from "../../assets";
import { useCartContext } from "../../contexts/CartContext";
import { useProductContext } from "../../contexts/ProductContext";
import { useLoadingContext } from "../../contexts/LoadingContext";
import Loading from "../../components/Loading/Loading";

const Product = () => {
  const { selectedProduct, setSelectedProduct, products } = useProductContext();
  const { cart, setCart } = useCartContext();
  const { isLoading, setIsLoading } = useLoadingContext();

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

  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((result) => {
      setSelectedProduct(result.data);
      setIsLoading(false);
    });
  }, []);

  const handleAddToCartButton = () => {
    setCart((prev) => [...prev, selectedProduct]);
    toast.success("Product added to cart");
  };

  const handleBuyButton = () => {
    console.log(products);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="w-4/5 m-auto mt-10">
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
            <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
              <img src={selectedProduct.images[1]} alt="" />
            </div>
            <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
              {" "}
              <img src={selectedProduct.images[2]} alt="" />
            </div>
            <div className="w-[150px] h-[150px] bg-product-image-bg rounded-3xl flex justify-center items-center">
              <img src={selectedProduct.images[3]} alt="" />
            </div>
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
              onClick={handleBuyButton}
              className="text-white bg-product-search-button py-3 px-20 text-xl rounded-xl"
            >
              But it now
            </button>
            <button
              onClick={handleAddToCartButton}
              className="bg-product-image-bg text-product-search-button py-3 px-20 text-xl rounded-xl"
            >
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
          <img src={icons.productPageAboutImage} alt="" />
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
          >
            {products[1]?.map((product) => (
              <div
                key={product.id}
                className="w-[250px] h-[340px] flex flex-col rounded-3xl p-5 bg-white shadow-sponsored-item gap-0.5"
              >
                <div className="w[200px] h-[200px] flex justify-center items-center rounded-3xl bg-product-image-bg">
                  <img src={product.images[0]} alt="" />
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
    </>
  );
};

export default Product;
