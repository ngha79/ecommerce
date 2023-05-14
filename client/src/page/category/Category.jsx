import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import product from "../../../assets/product.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProduct,
  getAllProductbySlug,
  getProductSearch,
} from "../../featured/product/productSlice";

const typePage = [
  {
    path: "/bundle",
    name: "Bundles",
    desc: "Carefully curated kits offering a healthy serving of savings.",
  },
  {
    path: "/shopall",
    name: "All Drinks",
    desc: "Organic, non-GMO, plant-based, and bottled in glass.",
  },
  {
    path: "/juices",
    name: "Cold-pressed Juices",
    desc: "Trying to sneak more veggies into someone’s life? Look no further.",
  },
  {
    path: "/booster",
    name: "Boosters",
    desc: "Pocket-sized power-ups to keep you feeling your best.",
  },
  {
    path: "/kombumcha",
    name: "Kombuchas",
    desc: "Made fresh with cold-pressed juice and 8g of sugar or less.",
  },
  {
    path: "/milk",
    name: "Plant Milks",
    desc: "Organic and dairy-free. So much to bring to the breakfast table.",
  },
  {
    path: "/shake",
    name: "Shakes",
    desc: "Rich and satisfying, these make great on-the-go breakfasts.",
  },
  {
    path: "/lemonade",
    name: "Lemonades",
    desc: "Swing by our stand for low-sugar, thirst-quenching sips.",
  },
  {
    path: "/search",
    name: "Search results",
  },
];
const Filter = ({
  setFilter,
  filter,
  price,
  setPrice,
  sort,
  setSort,
  product,
  setType,
  setMin,
  setMax,
}) => {
  const [typeSort, setTypeSort] = useState("Best selling");
  const handleOpenFilter = (e) => {
    setPrice(false);
    setSort(false);
    setFilter(!filter);
    e.stopPropagation();
  };
  const handleClick = (e) => {
    e.stopPropagation();
  };
  const handleOpenPrice = (e) => {
    e.stopPropagation();
    setFilter(false);
    setSort(false);
    setPrice(!price);
  };
  const handleOpenSort = (e) => {
    e.stopPropagation();
    setFilter(false);
    setPrice(false);
    setSort(!sort);
  };

  const handleSort = (name, type, typeSort) => {
    setType({
      name: name,
      data: type,
    });
    setTypeSort(typeSort);
  };

  const handleFilter = (e, type) => {
    if (type === "min") {
      setMin(e.target.value);
    } else {
      setMax(e.target.value);
    }
  };

  return (
    <div className="flex justify-between py-10 md:flex-row flex-col">
      <div className="flex md:py-0 py-8">
        <span>Filter:</span>
        <div
          className="cursor-pointer flex px-6 items-center justify-center relative"
          onClick={handleOpenFilter}
        >
          <span className="hover:underline pr-1">Availability</span>
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          {filter && (
            <div
              className="absolute top-10 md:left-0 min-w-[300px] max-w-96  border-2 border-black z-[5] bg-white "
              onClick={(e) => handleClick(e)}
            >
              <div className="flex w-full justify-between p-4 border-b border-b-gray-500">
                <span className="flex">0 selected</span>
                <span className="underline">Reset</span>
              </div>
              <div className="p-4">
                <div className="flex items-center pb-3">
                  <input type="checkbox" className=" mr-3" />
                  <span>In stock (4)</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className=" mr-3" />
                  <span>Out of stock (0)</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer flex items-center justify-center relative"
          onClick={handleOpenPrice}
        >
          <span className="hover:underline pr-1">Price</span>
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          {price && (
            <div
              className="absolute top-10  md:left-0 right-[-26px] min-w-[350px] max-w-96  border-2 border-black z-10 bg-white "
              onClick={handleClick}
            >
              <div className="flex w-full justify-between p-4 border-b border-b-gray-500">
                <span className="flex">The highest price is $19.95</span>
                <span className="underline">Reset</span>
              </div>
              <div className="p-4 flex items-center">
                <div className="flex items-center flex-1">
                  <span className="mr-1">$</span>
                  <input
                    type="number"
                    min={0}
                    className="border-2 border-black mr-3 outline-none p-2 w-full"
                    placeholder="From"
                    onChange={(e) => handleFilter(e, "min")}
                  />
                </div>
                <div className="flex items-center flex-1">
                  <span className="mr-1">$</span>
                  <input
                    type="number"
                    min={0}
                    className="border-2 border-black outline-none p-2 w-full"
                    placeholder="To"
                    onChange={(e) => handleFilter(e, "max")}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <span>Sort by:</span>
        <div
          className="cursor-pointer flex px-6 items-center relative "
          onClick={handleOpenSort}
        >
          <span className="hover:underline pr-2">{typeSort}</span>
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          {sort && (
            <div className="absolute top-10 left-0 w-max border-2 border-black z-10 bg-white">
              <div className="p-4">
                <div
                  className="p-2 rounded-md hover:bg-gray-300"
                  onClick={() =>
                    handleSort("name", "DESC", "Alphabetically, A-Z")
                  }
                >
                  Alphabetically, A-Z
                </div>
                <div
                  className="p-2 rounded-md hover:bg-gray-300"
                  onClick={() =>
                    handleSort("name", "ASC", "Alphabetically, Z-A")
                  }
                >
                  Alphabetically, Z-A
                </div>
                <div
                  className="p-2 rounded-md hover:bg-gray-300"
                  onClick={() =>
                    handleSort("price", "DESC", "Price, low to high")
                  }
                >
                  Price, low to high
                </div>
                <div
                  className="p-2 rounded-md hover:bg-gray-300"
                  onClick={() =>
                    handleSort("price", "ASC", "Price, high to low")
                  }
                >
                  Price, high to low
                </div>
              </div>
            </div>
          )}
        </div>
        <div>{product} products</div>
      </div>
    </div>
  );
};

const Category = () => {
  const { product, totalProduct, searchProduct } = useSelector(
    (state) => state.product
  );
  const location = useLocation();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);
  const [price, setPrice] = useState(false);
  const [sort, setSort] = useState(false);
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [search, setSearch] = useState("");
  const [type, setType] = useState({
    name: "",
    data: "",
  });
  const handleSetFilter = (e) => {
    e.stopPropagation();
    setFilter(false);
    setPrice(false);
    setSort(false);
  };
  const totalPage = Math.ceil(totalProduct / 16);
  const page = typePage.filter((page) => page.path == location.pathname)[0];
  useEffect(() => {
    return () => {
      if (location.pathname === "/shopall" || !product) {
        dispatch(getAllProduct({ page: 0 }));
      } else {
        dispatch(
          getAllProductbySlug({
            slug: location.pathname.split("/")[1],
            page: 0,
          })
        );
      }
    };
  }, [location]);
  const handleGetAllProductWithPage = (page) => {
    if (location.pathname === "/shopall") {
      dispatch(
        getAllProduct({
          page: page || 0,
          min: min || undefined,
          max: max || undefined,
          name: type.name === "name" ? type.data : undefined,
          price: type.name === "price" ? type.data : undefined,
        })
      );
    } else {
      dispatch(
        getAllProductbySlug({
          slug: location.pathname.split("/")[1],
          page: page || 0,
          min: min || undefined,
          max: max || undefined,
          name: type.name === "name" ? type.data : undefined,
          price: type.name === "price" ? type.data : undefined,
        })
      );
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearchProduct = (page) => {
    dispatch(
      getProductSearch({
        search: search,
        page: page || 0,
        min: min || undefined,
        max: max || undefined,
        name: type.name === "name" ? type.data : undefined,
        price: type.name === "price" ? type.data : undefined,
      })
    );
  };

  useEffect(() => {
    return () => {
      if (search) {
        handleSearchProduct();
      }
    };
  }, [search]);

  useEffect(() => {
    return () => {
      if (min || max || type.name) {
        if (location.pathname !== "/search") {
          handleGetAllProductWithPage();
        } else {
          handleSearchProduct();
        }
      }
    };
  }, [min, max, type]);

  return (
    <div
      className="px-8 mx-auto mt-36 max-w-7xl py-10 h-full"
      onClick={handleSetFilter}
    >
      {location.pathname !== "/search" ? (
        <>
          <h1 className="py-8 text-5xl font-poppins">{page.name}</h1>
          <span className="text-lg">{page.desc}</span>
        </>
      ) : (
        <>
          <h1 className="py-12 text-5xl text-center font-poppins w-full">
            {page.name}
          </h1>
          <form action="">
            <div className="relative z-0 w-[60%] mb-16 group mx-auto flex">
              <input
                type="text"
                name="discountId"
                id="discountId"
                value={search}
                className="block w-full text-base p-4  font-poppins text-gray-900 bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleSearch}
                required
              />
              <label
                htmlFor="discountId"
                className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[35%] left-4 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Search
              </label>
              <div className="absolute top-[30%] right-4 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 r"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </>
      )}
      <>
        <Filter
          filter={filter}
          setFilter={setFilter}
          price={price}
          setPrice={setPrice}
          sort={sort}
          setSort={setSort}
          product={totalProduct}
          setType={setType}
          setMin={setMin}
          setMax={setMax}
        />
        <div className="h-full">
          <div className="flex flex-col h-full">
            <div className="flex flex-col md:flex-row justify-start flex-wrap">
              {product.length > 0 &&
                product.map((products) => (
                  <div
                    className="md:w-[50%] lg:w-[25%] w-full h-full "
                    key={products.id}
                  >
                    <Link
                      to={`/product/${products.id}`}
                      state={products}
                      className="flex justify-center items-center flex-col cursor-pointer px-2 py-4"
                    >
                      <div className=" w-full lg:h-[400px] md:h-[500px]">
                        <img
                          src={products.image_url}
                          className="hover:scale-105 ease-out duration-500  w-full h-full"
                        />
                      </div>
                      <span className="px-12 break-words text-center text-base font-poppins cursor-pointer hover:underline py-4 ">
                        {products.name}
                      </span>
                      <span className="break-words">
                        From ${products.price} CAD
                      </span>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-12">
          {/* <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div> */}
          <div className=" flex flex-1 items-center justify-end pt-4">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              {/* <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a> */}

              {[...Array(totalPage)].map((page, i) => (
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={() => handleGetAllProductWithPage({ page: i })}
                  key={i}
                >
                  {i + 1}
                </a>
              ))}
              {/* <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a> */}
            </nav>
          </div>
        </div>
      </>
    </div>
  );
};

export default Category;
