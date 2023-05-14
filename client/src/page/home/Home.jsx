import sipphoto from "../../../assets/sipphoto.webp";
import product from "../../../assets/product.webp";
import juices from "../../../assets/juices.webp";
import keep1 from "../../../assets/keep1.webp";
import keep2 from "../../../assets/keep2.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductBestSeller,
  getProductBundle,
} from "../../featured/product/productSlice";
import Coupon from "../coupon/Coupon";

const Product = [
  { name: "Booters", image: juices, path: "/booster" },
  { name: "Kombumchas", image: juices, path: "/kombumcha" },
  { name: "Cold-pressed Juices", image: juices, path: "/juices" },
];

const Keeping = () => {
  return (
    <div className="]">
      <h1 className="font-poppins text-3xl pb-8">Keeping it green</h1>
      <div className="flex gap-5 flex-col md:flex-row md:max-h-[450px] ">
        <div className="flex-1 border-2 border-black sm:h-auto">
          <img
            src={keep1}
            className="h-[400px] md:h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 border-2 border-black p-6">
          <span className="font-poppins text-2xl break-words">
            We strive for sustainability in every facet of our business. From
            our plant-based recipes to our glass bottles, it’s central to who we
            are.
          </span>
          <Link
            to={"/about/our-story"}
            className="flex py-8 gap-4 items-center "
          >
            <span className="text-lg hover:underline">Learn more</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 flex items-center"
            >
              <path
                fontSize={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <div className="flex-1 border-2 border-black ">
          <img
            src={keep2}
            className="h-[400px] md:h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <div className="flex border-2 border-black flex-col-reverse lg:flex-row  overflow-hidden">
      <div className="sm:pt-8 lg:flex-2 lg:border-r-2 lg:border-t-0 border-t-2 border-black flex justify-center items-center flex-col px-10 sm:w-full">
        <h1 className="font-poppins text-2xl sm:text-5xl sm:max-w-5xl break-words pt-8 min-w-[250px]">
          “This spicy, pocket-sized booster is the healthy kickstart I need to
          start my day.”
        </h1>
        <span className="text-left w-full py-8 italic">- JANE S.</span>
      </div>
      <div className="lgm:flex-1 h-[450px]">
        <img src={juices} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

const Drinks = ({ products }) => {
  return products.map((product) => (
    <div key={product.id} className="flex gap-4">
      <Link to={product.path} className="w-full">
        <div className="flex flex-col justify-center items-center cursor-pointer ">
          <div className="flex justify-center items-center overflow-hidden w-full">
            <img
              src={product.image}
              className="hover:scale-105 ease-out duration-500 object-cover max-h-[500px] md:h-full w-full"
            />
          </div>
          <h2 className="flex py-4 justify-center gap-4 items-center hover:underline">
            <span className="font-poppins text-base lg:text-xl">
              {product.name}
            </span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 flex items-center"
            >
              <path
                fontSize={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </h2>
        </div>
      </Link>
    </div>
  ));
};

const Seller = ({ product }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-poppins py-8 gap-4">Meet our bestsellers</h1>
      <div className="md:flex flex-wrap lg:flex-nowrap w-full">
        {product.map((product) => (
          <Link
            to={`/product/${product.id}`}
            state={product}
            key={product.id}
            className="flex justify-center items-center flex-col cursor-pointer md:w-[50%] lg:w-[25%] w-full p-4"
          >
            <div className="flex justify-center items-center flex-col cursor-pointer w-full p-4">
              <div className="lg:h-[350px] md:h-[500px] max-w-[500px] md:w-full">
                <img
                  src={product.image_url}
                  className="hover:scale-105 ease-out duration-500 w-full h-[400px] md:h-full"
                />
              </div>
              <span className="break-words text-center text-base font-poppins cursor-pointer hover:underline py-4 ">
                {product.name}
              </span>
              <span className="break-words">From ${product.price} CAD</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Bundle = ({ product }) => {
  return (
    <div className="flex flex-col pb-12 ">
      <h1 className="text-3xl font-poppins py-8">Bundle up and save</h1>
      <div className="md:flex flex-wrap lg:flex-nowrap w-full">
        {product.map((product) => (
          <Link
            to={`/product/${product.id}`}
            state={product}
            key={product.id}
            className="flex justify-center items-center flex-col cursor-pointer md:w-[50%] lg:w-[25%] w-full p-4"
          >
            <div className="lg:h-[350px] md:h-[500px] max-w-[500px] md:w-full ">
              <img
                src={product.image_url}
                className="hover:scale-105 ease-out duration-500 w-full h-[400px] md:h-full"
              />
            </div>
            <span className="break-words text-center text-base font-poppins cursor-pointer hover:underline py-4 ">
              {product.name}
            </span>
            <span className="break-words">From ${product.price} CAD</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const { bundle, bestSeller } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      if (!bundle || !bestSeller) {
        dispatch(getProductBestSeller());
        dispatch(getProductBundle());
      }
    };
  }, []);
  return (
    <>
      <header className="h-full mt-36">
        <nav className="mx-auto max-w-7xl px-8">
          <div className="py-8">
            <div className="flex border-2 border-black flex-col md:flex-row">
              <div className="flex-1 md:border-r-2 md:border-b-0 border-b-2 border-black">
                <img src={sipphoto} className="object-cover w-full" />
              </div>
              <div className="flex-1 flex justify-center items-center flex-col">
                <h1 className="font-poppins text-6xl py-8">Take a sip</h1>
                <span className="px-12 break-words text-center text-base">
                  Sweet, tart, and oh-so-refreshing, our low-sugar, probiotic
                  lemonades taste like summer in a bottle.
                </span>
                <Link to={"/lemonade"}>
                  <button className="mt-8 mb-8 bg-black text-white px-8 py-3 text-base">
                    Shop Lemonades
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="py-8">
            <Seller product={bestSeller} />
          </div>
          <div className="py-8">
            <div className="hidden sm:block bg-bgtitle bg-no-repeat bg-cover p-40">
              <div className="flex mx-auto max-w-2xl">
                <span className="text-5xl drop-shadow-lg text-center font-poppins break-words text-gray-50">
                  Drinks that taste as good as they make you feel.
                </span>
              </div>
            </div>
            <div className="sm:hidden flex flex-col-reverse">
              <div className="bg-bgtitle bg-no-repeat bg-cover p-40"></div>
              <div className="flex mx-auto max-w-2xl border-2 border-black">
                <span className="text-5xl drop-shadow-lg text-center font-poppins break-words text-black p-8">
                  Drinks that taste as good as they make you feel.
                </span>
              </div>
            </div>
          </div>
          <div className="py-8 flex justify-around items-center gap-4 flex-col md:flex-row">
            <Drinks products={Product} />
          </div>
          <div className="py-8">
            <Review />
          </div>
          <div className="py-8">
            <Keeping />
          </div>
          <div className="py-8">
            <Bundle product={bundle} />
          </div>
        </nav>
      </header>
    </>
  );
}
