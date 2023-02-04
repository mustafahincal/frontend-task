import React from "react";
import { icons } from "../assets";
import { useCartContext } from "../contexts/CartContext";
import Loading from "./Loading/Loading";

const Cart = () => {
  const { cart, cartModal, setCartModal, removeFromCart, buyProducts } =
    useCartContext();

  return (
    <div className={`modal   ${cartModal && "activeModal"}`}>
      <div className="bg-content-bg text-black w-[900px] h-[700px] py-16 px-16 overflow-y-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-[45px] font-bold">Cart</h1>
          <div className="text-[30px]">{cart.length} items in your cart</div>
          <button onClick={() => setCartModal(false)}>
            <img src={icons.close} alt="" />
          </button>
        </div>
        <hr className="p-0.5 bg-gray-300 my-8" />
        {cart?.map((cartItem) => (
          <div
            key={cartItem.id}
            className=" mb-10 flex rounded-3xl p-5 bg-white shadow-sponsored-item gap-0.5"
          >
            <div className=" w-1/2 h-[200px] flex justify-center items-center rounded-3xl bg-product-image-bg">
              <img
                src={cartItem.images[0]}
                className="w-[200px] h-[200px] object-cover object-center"
                alt=""
              />
            </div>
            <div className=" w-1/2 flex flex-col gap-5 items-center">
              <span className="text-gray-600 mt-3"> {cartItem.title} </span>
              <span className="text-gray-500"> {cartItem.brand} </span>
              <div className="flex justify-between items-center gap-10">
                <span className="font-medium text-[24px] ">
                  {cartItem.price}$
                </span>
                <div className="flex gap-2 items-center">
                  <img src={icons.productStar} alt="" />
                  <span>{cartItem.rating}</span>
                </div>
              </div>
              <div>
                <button
                  className="bg-red-500 py-2 px-10 text-white rounded-xl text-lg"
                  onClick={() => removeFromCart(cartItem.id)}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {cart.length > 0 ? (
          <div className="text-right py-30">
            <button
              className="bg-green-500 py-2 px-10 text-white rounded-xl text-lg  mb-30"
              onClick={() => buyProducts()}
            >
              Buy products
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
