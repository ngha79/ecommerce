import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sipphoto from "../../../assets/sipphoto.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  getCart,
  updateCartItem,
} from "../../featured/cart/cartSlice";

const Cart = () => {
  const { cart, cartItem } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();

  const handleUpdateProduct = (type, cartItem) => {
    if (type === "Increment") {
      const data = {
        quantity: cartItem.quantity + 1,
        price: +cartItem.product.price * (cartItem.quantity + 1),
      };
      dispatch(
        updateCartItem({
          cartItemId: cartItem.id,
          data: data,
        })
      );
    } else {
      if (cartItem.quantity === 1) {
        return dispatch(deleteCartItem(cartItem.id));
      }
      const data = {
        quantity: cartItem.quantity - 1,
        price: +cartItem.product.price * (cartItem.quantity + 1),
      };
      dispatch(
        updateCartItem({
          cartItemId: cartItem.id,
          data: data,
        })
      );
    }
  };

  const handleDeleteCartItem = (e, cartItem) => {
    e.preventDefault();
    dispatch(deleteCartItem(cartItem.id));
  };

  const handleUpdateQuantity = (e, cart) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const total = cartItem.reduce((total, cart) => (total += cart.price), 0);

  return (
    <div className="mx-auto max-w-7xl px-8 py-16">
      <div className="flex items-center justify-between">
        <h1 className="font-poppins text-5xl">Your cart</h1>
        <Link to={"/"}>
          <span className="text-lg hover:underline cursor-pointer">
            Continue shopping
          </span>
        </Link>
      </div>
      {cartItem.length !== 0 ? (
        <div className="py-10">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left border-b border-gray-300 ">
                <th className="pb-4 text-xs text-gray-600">PRODUCT</th>
                <th className="pb-4 text-xs text-gray-600">QUANTITY</th>
                <th className="pb-4 text-xs text-gray-600 float-right mr-4">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody className="border-b border-b-gray-400">
              {cartItem.map((cart) => (
                <tr className="py-4" key={cart.id}>
                  <td className="flex py-4 max-w-screen-md flex-col md:flex-row">
                    <img
                      src={cart.product.image_url}
                      className="max-w-[100px] h-full border-2 border-black object-cover bg-no-repeat bg-center"
                    />
                    <div className="flex flex-col md:px-6">
                      <h3 className="font-poppins text-lg hover:underline cursor-pointer">
                        {cart.product?.name}
                      </h3>
                      <span>${cart.product?.price}</span>
                      <span>Size: {cart.product?.size}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex  items-center border border-black my-2 py-1 max-w-[130px] text-center">
                        <div
                          className="p-2 cursor-pointer"
                          onClick={() => handleUpdateProduct("Decrement", cart)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 12h-15"
                            />
                          </svg>
                        </div>
                        <input
                          type="number"
                          className="text-lg font-sans w-full text-center appearance-none outline-none quantity"
                          onChange={(e) => handleUpdateQuantity(e, cart)}
                          value={cart.quantity}
                        />

                        <div
                          className="p-2 cursor-pointer"
                          onClick={() => handleUpdateProduct("Increment", cart)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={(e) => handleDeleteCartItem(e, cart)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="text-right pr-4">${cart.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col py-12 items-end">
            <div className="py-4">
              <b className="text-xl">Subtotal</b>{" "}
              <span className="text-xl">${total} CAD</span>
            </div>
            <span className="text-sm">
              Taxes and shipping calculated at checkout
            </span>
            <Link to={"/checkout"}>
              <button className="my-6 px-32 py-3 bg-black text-white hover:scale-y-105 ease-out duration-200">
                Check out
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <span className="font-poppins text-5xl py-10">
            Your cart is empty
          </span>
          <Link to={"/"}>
            <button className="my-11 px-10 py-3 text-white bg-black hover:scale-105 ease-in-out duration-200">
              Continue shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
