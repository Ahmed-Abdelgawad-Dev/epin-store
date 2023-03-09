import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { Context } from "../ContextApi";
const Product = () => {
  const { productID = null } = useParams();
  const [qty, setQty] = useState(1);
  /**
   * @type {import('../types').ContextState}
   */
  const {
    detailProduct,
    currency,
    AED,
    screen: { width },
    addToCart,
    hadelDetails,
  } = useContext(Context);
  const [product, setProduct] = useState(detailProduct);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const targetProduct = hadelDetails(productID);
      setProduct(targetProduct);
    } catch (error) {
      navigate("/");
    }
  }, []);

  const addOne = useCallback(() => {
    setQty((prev) => (product.serials.length > prev ? prev + 1 : prev));
  }, [product, qty]);
  const subOne = useCallback(() => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  }, [product, qty]);
  const add_10 = useCallback(
    () =>
      setQty((prev) =>
        product.serials.length >= prev + 10 ? prev + 10 : product.serials.length
      ),
    []
  );

  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div className="container py-4 flex items-center gap-3">
        <Link to="/" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </Link>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- product-detail --> */}
      <div
        className={`container grid ${
          width <= 500 ? "grid-rows-2" : "grid-cols-2"
        } gap-6`}
      >
        <div>
          <img
            src={product.url}
            alt="product"
            className="w-1/2 h-3/4 mx-auto"
          />
        </div>

        <div>
          <h2 className="text-lg font-medium uppercase mb-2">
            {product.title}
          </h2>

          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span
                className={
                  product.serials.length > 0 ? "text-green-600" : "text-red-600"
                }
              >
                In Stock
              </span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>inStock: </span>
              <span
                className={
                  product.serials.length > 0 ? "text-green-600" : "text-red-600"
                }
              >
                {product.serials.length}
              </span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            {currency == "USD" ? (
              <>
                <p className="text-base text-red-700 font-semibold">
                  $ {product.price}
                </p>
                <p className="text-xs text-gray-400 line-through">
                  $ {product.before_discount}
                </p>
              </>
            ) : (
              <>
                <p className="text-base text-red-700 font-semibold">
                  AED {product.price * AED}
                </p>
                <p className="text-xs text-gray-400 line-through">
                  AED {product.before_discount * AED}
                </p>
              </>
            )}
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <button
                disabled={qty <= 1}
                onClick={subOne}
                className="h-8 w-8 text-xl pb-1 box-border disabled:text-gray-400 disabled:bg-gray-200 hover:bg-gray-100 flex items-center justify-center cursor-pointer select-none"
              >
                -
              </button>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                {qty}
              </div>
              <button
                disabled={product.serials.length - qty <= 0}
                onClick={addOne}
                className="h-8 w-8 text-xl pb-1 box-border  disabled:text-gray-400 disabled:bg-gray-200 hover:bg-gray-100 flex items-center justify-center cursor-pointer select-none"
              >
                +
              </button>
              {product.serials.length - 10 - qty >= 0 && (
                <button
                  onClick={add_10}
                  className="h-8 w-8  disabled:text-gray-400 disabled:bg-gray-200 hover:bg-gray-100 items-center flex justify-center cursor-pointer select-none"
                >
                  +10
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            {!product.inCart ? (
              <a
                onClick={() => {
                  addToCart(product.id, qty);
                }}
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent  hover:text-primary transition cursor-pointer"
              >
                <i className="fa-solid fa-bag-shopping"></i> Add to Cart
              </a>
            ) : (
              <a className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent  hover:text-primary transition cursor-pointer">
                <i className="fa-solid fa-bag-shopping"></i>
                already in Cart
              </a>
            )}
            {/* <a className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition cursor-pointer">
              <i className="fa-solid fa-heart"></i> Wishlist
            </a> */}
          </div>
        </div>
      </div>
      {/* <!-- ./product-detail --> */}

      {/* <!-- related product --> */}
      {/* <CategorySlider data={store} title="Related Products" /> */}
      {/* <!-- ./related product --> */}
    </>
  );
};
export default Product;
