import React, { useEffect, useRef, useState } from "react";
import juices from "../../../assets/juices.webp";
import more from "../../../assets/more.webp";
import bottlebg from "../../../assets/bottlebg.webp";
import "./product.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCartItem } from "../../featured/cart/cartSlice";
import {
  createComment,
  deleteCommentProduct,
  getAllCommentByProduct,
  getProductById,
} from "../../featured/product/productSlice";
import productService from "../../featured/product/productService";

const More = () => {
  const [shelf, setShelf] = useState(false);
  const [ship, setShip] = useState(false);
  const [inside, setInside] = useState(false);
  return (
    <>
      <div className="border-2 border-black my-8 flex flex-col justify-center items-center p-8">
        <div className="w-[60%] flex flex-col items-center">
          <h4 className="text-xs">IN CASE YOU’RE WONDERING</h4>
          <h1 className="font-poppins text-3xl py-4">
            Frequently asked questions
          </h1>
          <div className="flex flex-col border-t border-t-gray-200 py-4 w-full items-start">
            <span
              className="font-poppins text-xl py-2 hover:underline cursor-pointer "
              onClick={() => setShelf(!shelf)}
            >
              What's the shelf life?
            </span>
            {shelf && (
              <span>
                Guaranteed 10 days on delivery. See the label for the best
                before date. Once opened, drink within 5 days. Keep below 4°C.
              </span>
            )}
          </div>
          <div className="flex flex-col border-t border-b border-gray-200 py-4 w-full">
            <span
              className="font-poppins text-xl py-2 hover:underline cursor-pointer"
              onClick={() => setShip(!ship)}
            >
              How much is shipping?
            </span>
            {ship && (
              <span>
                We offer free shipping on orders over $70 across Canada and the
                USA. For orders under $70, a flat rate of $10 will be applied.
              </span>
            )}
          </div>
          <div className="flex flex-col border-b border-b-gray-200 py-4 w-full">
            <span
              className="font-poppins text-xl py-2 hover:underline cursor-pointer"
              onClick={() => setInside(!inside)}
            >
              What's inside?
            </span>
            {inside && (
              <>
                <span className="py-4">
                  1. Inside Job (60 mL) Filtered Water, Organic Cold-Pressed
                  Lemon, Organic Apple Cider Vinegar, Vegan Probiotic, Cayenne
                  Extract
                </span>
                <span className="py-4">
                  2. The Good, 300 mL Cucumber, Spinach, Romaine, Celery, Lemon
                  (All Organic + Cold-Pressed), Organic Fermented Lemongrass,
                  Himalayan Salt
                </span>
                <span className="py-4">
                  3. Blue Lemonade, 300 mL Filtered Water, Organic Cold-Pressed
                  Lemon, Organic Maple Syrup, Vegan Probiotic, Spirulina Extract
                </span>
                <span className="py-4">
                  4. The Giver, 300 mL Rainbow Chard, Cucumber, Collards,
                  Celery, Kale, Lemon, Ginger, Pea Sprouts, Sunflower Sprouts
                  (All Organic + Cold-Pressed)
                </span>
                <span className="py-4">
                  5. Vanilla Almond Brekky, 300 mL Organic: Oat Base (Filtered
                  Water*, Gluten Free Oats), Almond Butter, Maple Syrup, Pea
                  Protein, Chicory Inulin*, Vanilla Extract, Chia Seeds,
                  Himalayan Salt* (*Non-Organic Ingredient)
                </span>
                <span className="py-4">
                  6. Fiery Ginger, 60 mL Organic Cold-Pressed Ginger, Organic
                  Cold-Pressed Orange, Organic Cold-Pressed Lemon, Organic
                  Cold-Pressed Turmeric, Black Pepper Extract, Oregano Extract
                </span>
                <span className="py-4">
                  7. The Good, 300 mL Cucumber, Spinach, Romaine, Celery, Lemon
                  (All Organic + Cold-Pressed), Organic Fermented Lemongrass,
                  Himalayan Salt
                </span>
                <span className="py-4">
                  8. The Giver, 300 mL Rainbow Chard, Cucumber, Collards,
                  Celery, Kale, Lemon, Ginger, Pea Sprouts, Sunflower Sprouts
                  (All Organic + Cold-Pressed)
                </span>
                <span className="py-4">
                  9. Spicy Turmeric Lemonade, 300 mL Filtered Water, Organic
                  Cold-Pressed Lemon, Organic Maple Syrup, Organic Cold-Pressed
                  Turmeric, Vegan Probiotic, Cayenne Extract, Black Pepper
                  Extract
                </span>
                <span className="py-4">
                  10. The Good, 300 mL Cucumber, Spinach, Romaine, Celery, Lemon
                  (All Organic + Cold-Pressed), Organic Fermented Lemongrass,
                  Himalayan Salt
                </span>
                <span className="py-4">
                  11. Lavender Lemonade, 300 mL Filtered Water, Organic
                  Cold-Pressed Lemon, Organic Maple Syrup, Organic Lavender
                  Extract, Blue Matcha, Vegan Probiotic
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-1 d:max-h-[700px] flex-col-reverse md:flex-row py-10">
        <div className="bg-black text-white flex justify-center items-end p-12 md:max-w-sm w-full">
          <h1 className="text-5xl font-poppins break-words">
            More plants. More often.
          </h1>
        </div>
        <div className="flex flex-2 w-full">
          <img src={more} className="w-full" />
        </div>
      </div>
      <div className="flex py-10 gap-4 flex-col lg:flex-row">
        <div className="text-center border-2 border-black p-6">
          <h1 className="font-poppins text-2xl pb-4">Next-day delivery</h1>
          <span className="text-lg">
            Order by 10pm and wake up to your order of organic drinks on your
            doorstep! Next-day delivery is available across most of Canada and
            the USA.
          </span>
        </div>
        <div className="text-center border-2 border-black p-6">
          <h1 className="font-poppins text-2xl pb-4">Carbon offsetting</h1>
          <span className="text-lg">
            We carbon-offset every one of our home deliveries. Currently, our
            donations support Pachama's Jari Pará Project, which protects the
            Amazonian Rainforest.
          </span>
        </div>
      </div>
      <div className="md:bg-bottle bg-cover bg-center">
        <div className="bg-bottle h-[300px] bg-cover bg-center md:hidden"></div>
        <div className="md:p-16 max-w-3xl">
          <div className=" border-2 border-black bg-white p-12 text-3xl font-poppins">
            Our drinks are bottled in glass, never plastic. It’s better for you,
            better for the planet, and more fun to drink from.
          </div>
        </div>
      </div>
    </>
  );
};

const Comment = ({ productId }) => {
  const { user } = useSelector((state) => state.auth);
  const { comment, totalComment } = useSelector((state) => state.product);
  const target = useRef(null);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [deleteComment, setDeleteComment] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState(-1);
  const [previewImage, setPreviewImage] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState([]);
  const uploadImageComment = (e) => {
    setFile(e.target.files);
    const fileArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImage((prevImage) => prevImage.concat(fileArray));
    Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  };
  const handleDeleteImageComment = (e) => {
    e.preventDefault();
    setFile();
    setImage([]);
  };

  const handleCreateComment = (e) => {
    const form = new FormData();
    if (file) {
      for (let i = 0; i < file.length; i++) {
        form.append("image", file[i]);
      }
    }
    form.append("productId", productId);
    form.append("userId", user.id);
    form.append("rating", 4);
    form.append("title", "Good");
    form.append("content", content);
    dispatch(createComment({ data: form }));
    setContent("");
    setFile();
    setImage([]);
  };
  useEffect(() => {
    return () => {
      dispatch(getAllCommentByProduct({ page: 0, productId: productId }));
    };
  }, [productId]);
  const handleSetDeleteComment = (commentId) => {
    setDeleteComment(!deleteComment);
    setDeleteCommentId(commentId);
  };
  let totalPage = Math.ceil(totalComment / 16);
  const handleDeleteComment = (e, commentId) => {
    e.preventDefault();
    dispatch(deleteCommentProduct(commentId));
    setDeleteComment(false);
  };
  const handleGetAllComment = (page) => {
    dispatch(getAllCommentByProduct({ page: page, productId: productId }));
  };
  const handlePreviewImageHide = (e) => {
    e.preventDefault();
    setPreviewImage();
  };
  const handlePreviewImageShow = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="flex py-8 flex-col justify-center">
      <h1 className="font-poppins text-3xl">Comment</h1>
      {user && (
        <div>
          <div className="py-8 flex items-center">
            <img
              src={bottlebg}
              className="w-[50px] h-[50px] rounded-[50%] mr-4"
            />
            <div className="flex flex-col justify-center">
              <span className="text-base pb-2">{user.name}</span>
              <div className="flex items-center ">
                <input
                  type="text"
                  placeholder="Write comment"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="px-4 py-2 outline-none border min-w-[320px] border-black mr-6"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => target.current.click()}
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <input
                  type="file"
                  className="hidden"
                  ref={target}
                  multiple
                  onChange={uploadImageComment}
                />
                <button
                  className="py-2 ml-4 px-4 bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-lg text-white "
                  onClick={handleCreateComment}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="relative ml-16 flex gap-2 flex-wrap">
            {image.length > 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={handleDeleteImageComment}
                className="w-6 h-6 absolute top-0 right-0 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}

            {image.length > 0 &&
              image.map((image) => (
                <div
                  key={image}
                  className="max-w-[250px] max-h-[200px] overflow-hidden flex items-center"
                >
                  <img src={image} className="h-full" />
                </div>
              ))}
          </div>
        </div>
      )}
      {comment.map((comment) => (
        <>
          <div key={comment.id} className="py-8 flex items-center relative">
            <img
              src={bottlebg}
              className="w-[50px] h-[50px] rounded-[50%] mr-4"
            />
            <div className="flex flex-col justify-center">
              <span className="text-base font-medium pb-2">
                {comment.user.name}
              </span>
              <span className="flex">{comment.content}</span>
            </div>
            {user.id === comment.user.id && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute top-8 left-[30%]"
                onClick={() => handleSetDeleteComment(comment.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            )}
            {deleteComment && deleteCommentId === comment.id && (
              <button
                className="absolute left-[35%] top-8 bg-red-200 p-2"
                onClick={(e) => handleDeleteComment(e, comment.id)}
              >
                Delete
              </button>
            )}
          </div>
          <div className="h-[300px] overflow-hidden flex flex-wrap border border-gray-400 w-max gap-8 ">
            {comment &&
              comment.image.map((image) => (
                <img
                  src={image.image_url}
                  className="h-full"
                  onClick={() => {
                    setPreviewImage(image.image_url);
                  }}
                />
              ))}
            {previewImage && (
              <div
                className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20 bg-slate-50/50"
                onClick={handlePreviewImageHide}
              >
                <div
                  className="bg-gray-50 h-[80%] w-max flex items-center justify-center border border-gray-300"
                  onClick={handlePreviewImageShow}
                >
                  <img src={previewImage} className="h-full" />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 absolute top-8 right-12"
                  onClick={() => setPreviewImage()}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
        </>
      ))}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-12">
        <div className=" flex flex-1 items-center justify-end pt-4">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {totalComment > 1
              ? [...Array(totalPage)].map((page, i) => (
                  <div
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => handleGetAllComment(i)}
                    key={i}
                  >
                    {i + 1}
                  </div>
                ))
              : ""}
          </nav>
        </div>
      </div>
    </div>
  );
};

const MoreProducts = ({ type, productId }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    return () => {
      if (type) {
        async function productFlavor() {
          const response = await productService.getProductFlavor(
            type,
            productId
          );
          setProduct(response.product);
        }
        productFlavor();
      }
    };
  }, [type, productId]);
  return (
    <div className="flex flex-col py-10">
      <h1 className="font-poppins text-3xl py-8">Try these flavors next</h1>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap justify-center">
        {product.map((product) => {
          return (
            <div
              key={product.id}
              className="md:w-[48%] w-full lg:w-[25%] text-center cursor-pointer"
            >
              <Link to={`/product/${product.id}`}>
                <div className="hover:underline">
                  <div className="overflow-hidden">
                    <img
                      src={product.image_url}
                      className="hover:scale-105 ease-out duration-300"
                    />
                  </div>
                  <h3 className="py-4 text-lg font-sans">{product.name}</h3>
                </div>
                <p className="text-lg hover:no-underline">${product.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Product = () => {
  const { cart, cartItem } = useSelector((state) => state.cart);
  const { productId } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const [quantity, setQuantity] = useState(1);
  const [previewImage, setPreviewImage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProduct = (type) => {
    if (type === "Increment") {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  };
  const location = useLocation();

  useEffect(() => {
    return () =>
      dispatch(getProductById(location.pathname.split("/product/")[1]));
  }, []);
  const handleCreateCartItem = (e) => {
    if (!user) {
      navigate("/login");
    }
    e.preventDefault();
    const data = {
      cartId: cart.id,
      productId: productId.id,
      quantity: quantity,
      price: +quantity * +productId.price,
    };
    dispatch(createCartItem(data));
  };
  const handlePreviewImageHide = (e) => {
    e.preventDefault();
    setPreviewImage();
  };
  const handlePreviewImageShow = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="mx-auto max-w-7xl px-8 py-8 mt-36">
      <h1
        className="text-xl pb-8 cursor-pointer hover:underline w-max"
        onClick={() => navigate(-1)}
      >
        Back
      </h1>
      <div className="flex md:flex-wrap gap-12 flex-col md:flex-row">
        <div className="flex-1 md:max-w-[49%]">
          <img
            src={productId && productId.image_url}
            className="border-2 border-black"
            onClick={() => setPreviewImage(productId.image_url)}
          />
        </div>
        {previewImage && (
          <div
            className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20 bg-slate-50/50"
            onClick={handlePreviewImageHide}
          >
            <div
              className="bg-gray-50 h-[80%] w-max flex items-center justify-center border border-gray-300"
              onClick={handlePreviewImageShow}
            >
              <img
                src={previewImage}
                className="h-full border-2 border-black"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12 absolute top-8 right-12"
              onClick={() => setPreviewImage()}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
        <div className="flex-1 flex flex-col">
          <h1 className="font-poppins text-5xl">
            {productId && productId.name}
          </h1>
          <span className="py-8 text-xl">
            ${productId && productId.price} CAD
          </span>
          <span className="pb-4 text-base text-neutral-700">
            {productId && productId.desc}
          </span>
          <span className="pb-4 text-base text-neutral-700">
            Sold: {productId && productId.sold}
          </span>
          <span className="pb-4 text-base text-neutral-700">
            Quantity: {productId && productId.quantity}
          </span>
          <span className="text-sm">Quantity</span>
          <div className="flex items-center border-2 border-black my-2 py-1 max-w-[130px] text-center">
            <div
              className="p-2 cursor-pointer"
              onClick={() => handleProduct("Decrement")}
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
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />

            <div
              className="p-2 cursor-pointer"
              onClick={() => handleProduct("Increment")}
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
          <button
            className="border border-black bg-white py-3 px-16 my-2 text-base hover:scale-[1.01] duration-50 ease-in-out"
            onClick={handleCreateCartItem}
          >
            Add to cart
          </button>
          <button className="bg-black text-white py-3 px-16 border border-black text-base hover:scale-[1.01] duration-50 ease-in-out">
            Buy it now
          </button>
          <div className="text-base py-8">{productId && productId.detail}</div>
        </div>
      </div>
      <More />
      <Comment productId={location.pathname.split("/product/")[1]} />
      <MoreProducts
        type={productId.slug}
        productId={location.pathname.split("/product/")[1]}
      />
    </div>
  );
};

export default Product;
