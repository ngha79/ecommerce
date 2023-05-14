import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.webp";
import { useSelector } from "react-redux";
import Coupon from "../../page/coupon/Coupon";

const products = [
  {
    name: "Shop all",
    href: "/shopall",
  },
  {
    name: "Cold-pressed Juices",
    href: "/juices",
  },
  {
    name: "Booters",
    href: "/booster",
  },
  {
    name: "Kombumchas",
    href: "/kombumcha",
  },
  {
    name: "Plant Milks",
    href: "/milk",
  },
  {
    name: "Shakes",
    href: "/shake",
  },
  {
    name: "Lemonades",
    href: "/lemonade",
  },
];

const about = [
  {
    name: "Our story",
    href: "/about/our-story",
  },

  {
    name: "Contact us",
    href: "/about/contact-us",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <header className="bg-white fixed top-0 r-0 w-full z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-normal leading-6 text-gray-900 hover:underline">
              Drinks
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute p-3 -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                    >
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-normal text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to={"/bundle"}
            className="text-sm font-normal leading-6 text-gray-900 hover:underline"
          >
            Bundles
          </Link>
          <Link
            to={"/recipes"}
            className="text-sm font-normal leading-6 text-gray-900 hover:underline"
          >
            Recipes
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-normal leading-6 text-gray-900 hover:underline">
              About
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute p-3 -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {about.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                    >
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-normal text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="mx-3 cursor-pointer  hover:scale-110  ">
            <Link to={"/search"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Link>
          </div>
          <div className="mx-3 cursor-pointer  relative">
            <Link to={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div className="absolute bg-black text-white p-2 rounded-[50%] w-[15px] h-[15px] flex items-center justify-center right-[-4px] top-4 ">
                {cartItem.length}
              </div>
            </Link>
          </div>

          {user ? (
            <Link
              to={"/user"}
              className="mx-3 cursor-pointer  hover:scale-110 leading-6 text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="mx-3 cursor-pointer  hover:scale-110 leading-6 text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
          )}
        </div>
      </nav>
      <Coupon />
      <Dialog
        as="div"
        className="lg:hidden z-50"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal leading-7 hover:bg-gray-100">
                        Drinks
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Link to={item.href}>
                            <Disclosure.Button
                              key={item.name}
                              className="block rounded-lg py-2 pl-6 pr-3 w-full text-left text-sm font-normal leading-7 text-gray-900 hover:bg-gray-100"
                            >
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to={"/bundle"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Bundles
                </Link>
                <Link
                  to={"/recipes"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Recipes
                </Link>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal leading-7 hover:bg-gray-100">
                        About
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {about.map((item) => (
                          <Link to={item.href}>
                            <Disclosure.Button
                              key={item.name}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-100"
                            >
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                {user ? (
                  <Link
                    to={"/user"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                  >
                    Account
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                )}
              </div>
              <div className="py-6">
                <Link
                  to={"/search"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Search
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to={"/cart"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
