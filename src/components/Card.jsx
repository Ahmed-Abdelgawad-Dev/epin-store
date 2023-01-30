import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../ContextApi";
/**
 * @param {import('../types').CardParams} product
 */
const Card = ({ product, titleHight }) => {
  const { price, title, id, url, before_discount, inCart, serials } = product;
  /**
   * @type {import('../types').ContextState}
   */
  const { addToCart } = useContext(Context);
  return (
    <div
      key={id.toString()}
      className="bg-white shadow rounded overflow-hidden group"
    >
      <Link replace={true} to={`/shop/${id}`} className=" flex flex-col ">
        <div className="relative ">
          <div className="cart-banner">
            <img src={url} alt="product 1" className="w-full overflow-hidden" />
          </div>
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4 ">
          <h6 className="uppercase text-base overflow-hidden font-normal h-24 mb-2 text-gray-800 hover:text-primary transition">
            {title}
          </h6>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-sm text-primary font-semibold">
              AED {price*3.75}
            </p>
            <p className="text-xs text-gray-400 line-through">
              AED{before_discount*3.75}
            </p>
          </div>
        </div>
      </Link>
      {serials.length > 0 ? (
        <>
          {inCart ? (
            <Link
              replace
              to="/checkout"
              className={`block
          w-full
          py-1
          text-center
          rounded-b
          border
          border-primary
          hover:text-white
          text-primary
          hover:bg-primary
          bg-transparent
          transition`}
            >
              Go to Cart
            </Link>
          ) : (
            <a
              onClick={() => addToCart(id, 1)}
              className={`block
          w-full
          py-1
          text-center
          rounded-b
          border
          border-primary
          text-white
          hover:text-primary
          bg-primary
          hover:bg-transparent
          cursor-default
          transition`}
            >
              Add to cart
            </a>
          )}
        </>
      ) : (
        <>
          <a
            className={`block
          w-full
          py-1
          text-center
          rounded-b
          border
          border-red-500
          text-white
          hover:text-primary
          bg-red-500
          hover:bg-transparent
          cursor-default
          transition`}
          >
            Out of Stock
          </a>
        </>
      )}
    </div>
  );
};
export default Card;
