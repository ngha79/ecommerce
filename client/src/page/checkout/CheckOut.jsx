import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/bottle.webp";
import keep1 from "../../../assets/keep1.webp";
import recipes1 from "../../../assets/recipes1.webp";
import { toast } from "react-toastify";
import {
  deleteAllCartItem,
  deleteCartItem,
  resetCart,
  resetCartItem,
  updateCartItem,
} from "../../featured/cart/cartSlice";
import { applyCoupon } from "../../featured/coupon/couponSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  createOder,
  createOderItem,
  resetOder,
} from "../../featured/oder/oderSlice";

const CheckOut = () => {
  const { user } = useSelector((state) => state.auth);

  const { cart, cartItem } = useSelector((state) => state.cart);

  const { oder } = useSelector((state) => state.oder);

  const { couponCode, isExist } = useSelector((state) => state.coupon);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");

  const [account, setAccount] = useState({
    nameAccount: user.name,
    address: user.address,
    city: "",
    phone: user.phone,
  });

  const handleSetOder = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const total = cartItem.reduce((total, cart) => (total += cart.price), 0);

  const handleDeleteCartItem = (cart) => {
    dispatch(deleteCartItem(cart.id));
  };

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

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    dispatch(applyCoupon(coupon));
  };

  const handleCreateOder = () => {
    const totalPrice = couponCode?.discountValue
      ? (total * (100 - +couponCode.discountValue)) / 100 + 5
      : total + 5;
    const create = {
      status: "pending",
      shippingFee: "5$",
      total: totalPrice,
      discountId: 1,
      userId: user.id,
    };
    dispatch(createOder(create));
  };

  useEffect(() => {
    if (oder) {
      cartItem.map((cart) => {
        let oderItem = {
          name: cart.product.name,
          quantity: cart.quantity,
          productId: cart.productId,
          price: cart.price,
          oderId: oder.id,
        };
        return dispatch(createOderItem(oderItem));
      });
      toast.success("Create oder success.");

      dispatch(deleteAllCartItem(cart.id));
      dispatch(resetCartItem());
      dispatch(resetOder());
      navigate("/");
    }
  }, [oder]);

  return (
    <div className="max-w-7xl mx-auto px-8 flex md:flex-row flex-col border border-gray-100 bg-gray-100 rounded-lg py-10 my-12">
      <div className="mx-8 flex-1">
        <h1 className="pb-8 font-poppins text-xl font-bold">
          Shipping information
        </h1>
        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="nameAccount"
              id="nameAccount"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={account.nameAccount}
              required
              onChange={handleSetOder}
            />
            <label
              htmlFor="nameAccount"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="address"
              id="address"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleSetOder}
              value={account.address}
              required
            />
            <label
              htmlFor="address"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="City"
                id="City"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleSetOder}
                required
              />
              <label
                htmlFor="City"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleSetOder}
                value={account.phone}
                placeholder=" "
                required
              />
              <label
                htmlFor="phonenumber"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
          </div>
        </form>
        <h1 className="py-8 font-poppins text-xl font-bold">Payment</h1>
        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="name"
              name="Card"
              id="Card"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Card"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Card number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="namecard"
              id="namecard"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="namecard"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name on card
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="date"
                id="date"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="date"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Expiration date (MM/YY)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="cvc"
                id="cvc"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="cvc"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                CVC
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="mx-8 flex-1">
        <h1 className="text-xl font-poppins font-bold pb-8">Oder summary</h1>
        <div className="border border-gray-200 bg-white rounded-md">
          {cartItem.length > 0 ? (
            <>
              {cartItem.map((cart) => (
                <div className="flex justify-between p-4 border-b border-b-gray-200 h-[140px]">
                  <div className="flex-1 p-2 h-full w-full">
                    <img src={recipes1} className="w-full h-full" />
                  </div>
                  <div className="flex-3 p-2 flex flex-col items-start justify-between h-full">
                    <div>
                      <h3 className="font-poppins font-medium">
                        {cart.product.name}
                      </h3>
                      <h4>{cart.product.size}</h4>
                    </div>
                    <h5 className="font-poppins font-medium">
                      ${cart.product.price}
                    </h5>
                  </div>
                  <div className="flex-1 p-2 flex flex-col items-end justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => handleDeleteCartItem(cart)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>

                    <div className="flex items-center border-2 border-black my-2 max-w-[90px] text-center">
                      <div
                        className="p-1 cursor-pointer"
                        onClick={() => handleUpdateProduct("Decrement", cart)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                      <input
                        type="number"
                        className="text-lg font-sans w-full text-center appearance-none outline-none quantity"
                        value={cart.quantity}
                      />
                      <div
                        className="p-1 cursor-pointer"
                        onClick={() => handleUpdateProduct("Increment", cart)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="font-poppins">
                <div className="border-b border-b-gray-200 py-4 m-4">
                  <div className="flex items-center justify-between py-2 font-base text-sm">
                    <h3>Subtotal</h3>
                    <h3>${total}</h3>
                  </div>
                  {couponCode?.discountValue && (
                    <div className="flex items-center justify-between py-2 font-base text-sm">
                      <h3>Coupon</h3>
                      <h3>${(total * +couponCode.discountValue) / 100}</h3>
                    </div>
                  )}
                  <div className="flex items-center justify-between py-2 font-base text-sm">
                    <h3>Shipping</h3>
                    <h3>$5</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 pb-4 font-semibold text-md border-b border-b-gray-200">
                  <h3>Total</h3>
                  <h3>
                    $
                    {couponCode?.discountValue ? (
                      <>
                        {(total * (100 - +couponCode.discountValue)) / 100 + 5}
                        <span className="ml-2 line-through"> ${total + 5}</span>
                      </>
                    ) : (
                      total + 5
                    )}
                  </h3>
                </div>
                <div className="flex items-end justify-between p-4">
                  <div className="flex flex-col">
                    <label htmlFor="" className="pb-2 font-bold">
                      Coupon
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setCoupon(e.target.value)}
                      value={coupon}
                      className=" border-2 border-gray-200 outline-none p-2"
                    />
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                    onClick={handleApplyCoupon}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="p-4">
                <button
                  className="bg-blue-700 hover:bg-blue-500 text-white p-4 w-full rounded-lg font-poppins text-md"
                  onClick={handleCreateOder}
                >
                  Confirm oder
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="p-8 font-poppins font-bold text-xl">
                Your cart is empty
              </h1>
              <Link to={"/shopall"} className="flex justify-center mb-8">
                <button className="px-8 py-2 bg-black rounded-lg text-white">
                  Shopping
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
