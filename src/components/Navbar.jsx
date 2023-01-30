import React, { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Consumer, Context } from "../ContextApi";
const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") ?? "");
  /**
   * @type {import('../types').ContextState}
   */
  const { cart, categories } = useContext(Context);
  const style_ = {
    color: "white",
    backgroundColor: "#3c284b",
    padding: "0px",
    margin: "0px",
    width: "8rem"
  };
  return (
    <>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <div className="rounded">
            <a href="index.html">
              <img src="assets/images/logo.jpg" alt="Logo" className="w-32 pb-0" />
              <p style={style_}>
                <span className="text-xs p-3 pt-0">اكواد للألعاب العالمية </span>
              </p>
            </a>
          </div>
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="search"
              onChange={(e) => setQ(e.target.value)}
              value={q}
            />
            <button
              onClick={(e) => {
                setSearchParams((prev) => {
                  prev.set("q", q.toLowerCase());
                  return prev;
                });
              }}
              className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
            >
              Search
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/checkout"
              className="text-center text-gray-700 hover:text-primary transition relative cursor-pointer"
            >
              <div className="text-2xl">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                {cart.length}
              </div>
            </Link>
          </div>
        </div>
      </header>
      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-white">
              <i className="fa-solid fa-bars"></i>
            </span>
            <span className="capitalize ml-2  text-white">All Categories</span>

            {/* <!-- dropdown --> */}
            <div className="absolute w-full left-0 z-10 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              {categories.map((c, id) => {
                return (
                  <Link
                    key={id.toString()}
                    to={"shop?" + new URLSearchParams({ cat: c + "," })}
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <span className=" capitalize text-gray-600 text-sm">
                      {c.replace(/_/g, " ")}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
